var idbSupported = false;
var db;


$(document).ready(function(){
  ///////// DB section
  if("indexedDB" in window) {
    idbSupported = true;
    }
  
  if(idbSupported) {

    var openRequest = indexedDB.open("topic6",1);
 
    openRequest.onupgradeneeded = function(e) {
      console.log("Running onupgradeneeded...");
      var thisDB = e.target.result;

      if(!thisDB.objectStoreNames.contains("data")) {
        thisDB.createObjectStore("data", {autoIncrement:true});
      }
    }
 
      openRequest.onsuccess = function(e) {
        console.log("Success!");
        db = e.target.result;
        var $dataTextArea = $('#dataTextArea');

        //button save listener
        $('#buttonSave').on('click',function(){

          var textFromTA = $dataTextArea.val();
          console.log('Text: '+textFromTA);
          $dataTextArea.val('');
          var data = { data:textFromTA, created:new Date() }
          var transaction = db.transaction(["data"],"readwrite");
          var store = transaction.objectStore("data");
          //Perform the add
          var request = store.add(data);

          request.onerror = function(e) {
            console.log("Error",e.target.error.name);
            //some type of error handler
          }

          request.onsuccess = function(e) {
            console.log("transaction success!");
          }
        })

        //button get listener
        $('#buttonGet').on('click',function(){

          var transaction = db.transaction(["data"], "readonly");
          var objectStore = transaction.objectStore("data");
 
          var cursor = objectStore.openCursor();
          var $dataSaved = $('#dataSaved');
          $dataSaved.html("");
 
          cursor.onsuccess = function(e) {
          	
            var res = e.target.result;

            if(res) {
              var obj = '';
              for(var field in res.value) {
              	obj = obj + '<b>' + field + "</b> = " + res.value[field] + '<br>';
              }
              $dataSaved.append('<p>'+obj+'</p>');
              res.continue();
            }
          }
        })

        //button erase listener
        $('#buttonErase').on('click',function(){

          var transaction = db.transaction(["data"], "readwrite");
          var objectStore = transaction.objectStore("data");
 
          var cursor = objectStore.openCursor();
          $('#dataSaved').html("");
          cursor.onsuccess = function(e) {
          	
            var res = e.target.result;

            if(res) {
              objectStore.delete(res.key);
              res.continue();
            }
          }
        })
 

    }
 
      openRequest.onerror = function(e) {
        console.log("Error");
        console.dir(e);
    }

  }

  ///////// Drag and drop section

  var holder = document.getElementById('holder');
  var $state = $('#status');

  if (typeof window.FileReader === 'undefined') {
    $state.addClass('fail');
  } else {
    $state.addClass('success');
    $state.html('File API & FileReader available');
  }

  holder.ondragover = function() {
    this.className = 'hover';
    return false;
  };
  holder.ondragend = function() {
    this.className = '';
    return false;
  };
  holder.ondrop = function(e) {
    this.className = '';
    e.preventDefault();

    var file = e.dataTransfer.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        console.log(event.target);
        holder.innerText = event.target.result;
    };
    console.log(file);
    reader.readAsText(file);

    return false;
  }

  //////////Socket Web
  var wsUri = "ws://echo.websocket.org/"; 
  var $output = $('#output');  

  function init() { 
  	$output.html("");
  	testWebSocket(); 
  }  

  function testWebSocket() { 
  	websocket = new WebSocket(wsUri); 
  	websocket.onopen = function(evt) { 
  		onOpen(evt) }; 
  	websocket.onclose = function(evt) { 
  		onClose(evt) }; 
  	websocket.onmessage = function(evt) { 
  		onMessage(evt) }; 
  	websocket.onerror = function(evt) { 
  		onError(evt) }; 
  	}  

  function onOpen(evt) { 
  	writeToScreen("CONNECTED"); 
  	doSend("WebSocket rocks"); 
  }  

  function onClose(evt) { 
  	writeToScreen("DISCONNECTED"); 
  }  

  function onMessage(evt) { 
  	writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'); 
  	websocket.close(); 
  }  

  function onError(evt) { 
  	writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data); 
  }  

  function doSend(message) { 
  	writeToScreen("SENT: " + message);  websocket.send(message); 
  }  

  function writeToScreen(message) { 
  	var pre = document.createElement("p"); 
  	pre.style.wordWrap = "break-word"; 
  	pre.innerHTML = message; 
  	$output.append(pre); 
  }  

  $('#testSocket').on('click',init);


  ////////////Canvas

  function polygon(ctx, x, y, radius, sides, startAngle, anticlockwise) {
    if (sides < 3) return;
    var a = (Math.PI * 2)/sides;
    a = anticlockwise?-a:a;
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(startAngle);
    ctx.moveTo(radius,0);
    for (var i = 1; i < sides; i++) {
      ctx.lineTo(radius*Math.cos(a*i),radius*Math.sin(a*i));
    }
    ctx.closePath();
    ctx.restore();
  }


  var c2 = document.getElementById('myCanvas').getContext('2d');
  //Cuadrado rojo
  c2.fillStyle = '#f00';
  c2.beginPath();
  c2.moveTo(5, 5);
  c2.lineTo(105, 5);
  c2.lineTo(105, 105);
  c2.lineTo(5, 105);
  c2.fill();
  c2.closePath();
  c2.fill();
  c2.stroke();

  var pentagon = c2;
  pentagon.beginPath();
  polygon(pentagon, 100,100,40,5);
  pentagon.fillStyle = '#ff0';
  pentagon.closePath();
  pentagon.fill();
  pentagon.stroke();

  var triangle = c2;
  triangle.beginPath();
  polygon(triangle, 170,80,60,3);
  triangle.fillStyle = '#00f';
  triangle.closePath();
  triangle.fill();
  triangle.stroke();

  var muchSides = c2;
  muchSides.beginPath();
  polygon(muchSides, 250,90,50,11);
  muchSides.fillStyle = '#0f0';
  muchSides.closePath();
  muchSides.fill();
  muchSides.stroke();


  ////////////Canvas animated

  var canvasA = document.getElementById('myAnimatedCanvas');
  var contextA = canvasA.getContext("2d");

  var canvasWidth = canvasA.width;
  var canvasHeight = canvasA.height;

  contextA.beginPath();
     
  polygon(contextA,30,canvasHeight/2,30,4,0);

  contextA.closePath();
     
  contextA.fillStyle = "#006699";
  contextA.fill();

  $('#buttonAnimate').on('click',function(){


  	var canvasAnim = canvasA; 
    var mainContext = canvasAnim.getContext("2d");



    var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

    var horizontalPosition = 31;
    var rotation = 0.02;
    var izqADer = true;

    function drawRectangle() {
    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
     
    // color in the background
    mainContext.fillStyle = "#FFFFFF";
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
     
    // draw the rectangule
    mainContext.beginPath();
     
    polygon(mainContext,horizontalPosition,canvasHeight/2,30,4,rotation);

    mainContext.closePath();
     
    mainContext.fillStyle = "#006699";
    mainContext.fill();

    requestAnimationFrame(drawRectangle);
    
    if(horizontalPosition == 30){
      izqADer = true;
    }

    if (horizontalPosition == canvasWidth-30){
      izqADer = false;
    }
    if(izqADer){
      horizontalPosition++;
      rotation = rotation + 0.05;
    } else{
      horizontalPosition--;
      rotation = rotation - 0.05;
    }
  }
    drawRectangle();

  })

  //



});