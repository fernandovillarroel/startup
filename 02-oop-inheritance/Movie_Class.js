/*
 * Movie refactored as a Module
 */
var Movie = (function (title,duration,year) {
    
    return function (title, duration, year) {
      this.attributes = {};
      this.attributes['title'] = title;
      this.attributes['duration'] = duration;
      this.attributes['year'] = year;
      this.attributes['actors'] = [];
       

    //Privileged methods (setters and getters)
    this.set = function(attr,value) { this.attributes[attr] = value;}
    this.get = function(attr) {return this.attributes[attr];}
    } 
    
})();

// Public methods
Movie.prototype.play = function(){ 
  $.publish('movies',['play',this.attributes['title']]);
}
Movie.prototype.stop = function() {
  $.publish('movies',['stop',this.attributes['title']]);
}
/*Movie.prototype.get = function(attr) {
  return this.attributes[attr];
}*/
SocialMixin.call(Movie.prototype);

/*
function Movie (title, duration, year) {
    this.attributes = {};
    this.attributes['title'] = title;
    this.attributes['duration'] = duration;
    this.attributes['year'] = year;
}

Movie.prototype = {
    constructor: Movie,
    play:function (){
        //console.log('Playing '+this.attributes['title']+'...');
        $.publish('movies',['play',this.attributes['title']]);
    },
    stop:function (){
        //console.log(this.attributes['title']+' stopped.');
        $.publish('movies',['stop',this.attributes['title']]);
    },
    set:function (attr, value){
        this.attributes[attr] = value;
    },
    get:function (attr){
        return this.attributes[attr];
    }
}*/