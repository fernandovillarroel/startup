/*requirejs.config({
    paths: {
        jQuery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
    },
    shim: {

      'Movie': {
          deps: ['jQuery'],
      },
      'Director': {
          deps: ['jQuery']
      }
    }  
});*/

require(['Movie','Director'],
  function(Movie,Director) {

    var alien = new Movie('Alien',1979,117);
    var ridleyScott = new Director('Ridley Scott'); 
    //sets name in constructor 
    ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...','I dont ever blink, honestly.','I do a pretty good job at casting actually.']); 
    alien.set('director', ridleyScott); 
    console.log(alien.get('director').speak());
    
    //show all the quotes from director
    var quotes = ridleyScott.get('quotes');
    var numberOfQuotes = quotes.length;
    var i, divs;
    var $allQuotes = $('#allQuotes');

    for (i = 0;i < numberOfQuotes;i++){
      divs = '<div class=\'childQuote\'>' + quotes[i]+'</div><br>';
      $allQuotes.append(divs);
    } 

    }
);


