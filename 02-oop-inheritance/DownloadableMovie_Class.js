/*
 * DownloadableMovie extends Movie
 */

 var DownloadableMovie = (function (title,duration,year) {
    
    return function (title, duration, year) {
      
      Movie.call(this, title, duration, year)

      // inherit the methods and properties from Question
      inheritPrototype(DownloadableMovie, Movie);

    } 
    
    
})();

  //Public method
  DownloadableMovie.prototype.download = function() {
    $.publish('movies',['download',this.attributes['title']]);
}

/*
 * Parasitic Combination Inheritance Pattern
 */
function inheritPrototype(childObject, parentObject) {
    // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject
    // So the copyOfParent object now has everything the parentObject has 
    var copyOfParent = Object.create(parentObject.prototype);

    //Then we set the constructor of this new object to point to the childObject.
    // Why do we manually set the copyOfParent constructor here, see the explanation immediately following this code block.
    copyOfParent.constructor = childObject;

    // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)
   childObject.prototype = copyOfParent;
}