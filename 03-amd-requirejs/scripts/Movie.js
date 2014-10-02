define( 
    ['Director'], 
    // module definition function
    // dependencies (foo and bar) are mapped to function parameters
    function (Director) {
        // return a value that defines the module export
        // (i.e the functionality we want to expose for consumption)

        // create your module here
        var Movie = function (title, duration, year) {

          this.attributes = {};
          this.attributes['title'] = title;
          this.attributes['duration'] = duration;
          this.attributes['year'] = year;
          this.attributes['director'] = "";
          this.attributes['actors'] = [];
       

          //Privileged methods (setters and getters)
          this.set = function(attr,value) { this.attributes[attr] = value;}
          this.get = function(attr) {return this.attributes[attr];}
        } ;

        // Public methods
        Movie.prototype.play = function(){ 
          console.log('Playing '+this.attributes['title']);
        }
        Movie.prototype.stop = function() {
          console.log(this.attributes['title'] + ' stopped.');
        }
 
        return Movie;
});