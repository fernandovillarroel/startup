$(document).ready(function(){

  var myParser = new Parser();
  var $mySelect = $('#mySelect');
  var $principal = $('#principal');
  var $theChoosenOne = $('#templateChoosen');

  $.getJSON('profiles.json',function(json) {
        $principal.html(myParser.parseHandlebars(json));
        $theChoosenOne.html('<b>Handlebars</b>.');
        $theChoosenOne.css('color','red');
        });
  
  $('#boton').on('click', function(){
    var selected = $mySelect.val();
    if (selected == 0){
      $.getJSON('profiles.json',function(json) {
        $principal.html(myParser.parseHandlebars(json));
        $theChoosenOne.html('<b>Handlebars</b>.');
        $theChoosenOne.css('color','red');
        })

    } else if (selected == 1){
      $.getJSON('profiles.json',function(json) {
        $principal.html(myParser.parseUnderscore(json));
        $theChoosenOne.html('<b>Underscore</b>.');
        $theChoosenOne.css('color','red');        
        })

    } else if (selected == 2){
      $.getJSON('profiles.json',function(json) {
        $principal.html(myParser.parseDust(json));
        $theChoosenOne.html('<b>{dust}</b>.');
        $theChoosenOne.css('color','red');        
        })
    }

  })

})
