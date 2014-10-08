 define(["underscore","backbone","localStorage","models/Movie"],
    function(_, Backbone, localStorage, Movie) {

         var MovieList = Backbone.Collection.extend({
            model: Movie,

            localStorage: new Backbone.LocalStorage('data-movies')
          });

         return MovieList;

});
