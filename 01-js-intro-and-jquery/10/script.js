$(document).ready(function() {
          $('#oculto').fadeIn(4000);
          $('.alias').focus();

  $('#boton').click(function() { 
 var name = $('.alias').val();
 var url = 'http://bootcamp.aws.af.cm/welcome/' + name;

 $.get(url, function(respuestaSolicitud){
   $('#answer').text(respuestaSolicitud.response);
   highlightMyName();
   }).fail(function() {
     $('#answer').css('color','red');
     $('#answer').text('Algo anda mal.');
     });
   });

});

function highlightMyName() {
  var search = $('.alias').val();
  $("div:contains('"+search+"')").each(function () {
  var regex = new RegExp(search,'gi');
  $(this).html($(this).text().replace(regex, "<span class='blue'>"+search+"</span>"));
  });
      
}