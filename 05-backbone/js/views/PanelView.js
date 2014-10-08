define(["underscore","backbone","localStorage","models/movie","collections/movieList","views/MovieView","template"], 
    function(_, Backbone, localStorage, Movie, MovieList, MovieView, Template) { 

        var myMovies = new MovieList;
        var myTemplate = new Template();

        PanelView = Backbone.View.extend({
                el: 'div#panelPpal',

                events: {
                    "click button#theButton": "addMovie"
                },

                initialize: function(){
                      myMovies.fetch();
                      this.render();
                },

                render: function(){
                      if (myMovies.length > 0){
                        var nMovies = myMovies.length;
                        var moviesJson = myMovies.toJSON();
                        var i, templated, movieN, newElmovie;
                        var templateU =  _.template(myTemplate.get());
                        for (i = 0;i<nMovies;i++){
                          this.$('#panelPpalMovies').append('<div id="movie_'+i+'" '+templateU(moviesJson[i])+'</div>');
                          movieN = myMovies.at(i);
                          newElmovie = 'div#movie_'+i;
                          var mView = new MovieView({model:movieN, el:newElmovie});

                        }

                      }
                },
                addMovie: function(){
                    var idMovie = myMovies.length;
                    newEl = 'div#movie_'+idMovie;
            
                    this.$('#panelPpalMovies').html("");
                    var newTitle = this.$('#myTitle').val();
                    var newYear = this.$('#myYear').val();
                    var newGenre = this.$('#myGenre').val();
                    var newSynapsis = this.$('#mySynapsis').val();

                    this.$('#myTitle').val("");
                    this.$('#myYear').val("");
                    this.$('#myGenre').val("");
                    this.$('#mySynapsis').val("");
                    var newMovie = new Movie({title:newTitle, year:newYear, genre:newGenre, synapsis:newSynapsis});
                    myMovies.add(newMovie);
                    newMovie.save();
                    this.render();

                    return false; 
                }

            });

        return PanelView;

    });
