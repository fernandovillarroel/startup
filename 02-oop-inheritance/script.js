$(document).ready(function() {

  var transformers = new Movie ('Transformers',144,2007);
  var tlotrIII = new DownloadableMovie ('The Lord of the Rings: The Return of the King',201,2003);
  var theOthers = new Movie ('The Others',101,2001);

  theOthers.set('title','Los Otros');

  var myObserver = new MovieObserver();

  var actor1 = new Actor('Viggo','Mortensen');
  var actor2 = new Actor('Elijah','Wood');
  var actor3 = new Actor('Orlando','Bloom');

  tlotrIII.set('actors',[actor1,actor2,actor3]);
  
  var cantActores = tlotrIII.get('actors').length;
  var i;
  var names = '';

  for (i = 0; i < cantActores; i++) {
    names = names + tlotrIII.get('actors')[i].getLastName()+' ';
}

  console.log('En '+tlotrIII.get('title')+', hay 3 actores: '+names+'.');

  $('#botonPlay').click(function() { 
    transformers.play();
  });

  $('#botonStop').click(function() { 
    transformers.stop();
  });

  $('#botonDownload').click(function() { 
    tlotrIII.download();
  });

  $('#botonShare').click(function() { 
    theOthers.share('V. Rivas');
  });

  $('#botonLike').click(function() { 
    theOthers.like();
  });
})