define(["underscore","backbone","models/Movie"],
    function(_, Backbone, Movie) {

        MovieView = Backbone.View.extend({

                events: {
                    "click button#removeButton.close": "removeMovie",
                    "click button#editButton.close": "editMovie",
                    "click button#theEditButton": "saveMovie"
                },

                initialize: function(myOptions){
                      this.options = myOptions;        
                },
                removeMovie: function(){
                    $(this.options.el).remove();
                    this.options.model.destroy();
            
                    return false; 
                },
                editMovie: function(){
                  $('.editControl').attr('contenteditable','false');
                  $('.visibilityControl').addClass('hidden');
                  var editableText = $("<textarea />");
                  editableText.val = this.options.model.get("title");
                  this.$('#titleMovie').attr('contenteditable','true');
                  this.$('#yearMovie').attr('contenteditable','true');
                  this.$('#genreMovie').attr('contenteditable','true');
                  this.$('#synapsisMovie').attr('contenteditable','true');
                  this.$('#titleMovie').focus();
                  this.$('#buttonHidden').removeClass('hidden');

                  return false;
                },
                saveMovie: function(){
                  this.options.model.set("title",this.$('#titleMovie').html());
                  this.options.model.set("year",this.$('#yearMovie').html());
                  this.options.model.set("genre",this.$('#genreMovie').html());
                  this.options.model.set("synapsis",this.$('#synapsisMovie').html());
                  this.options.model.save();
                  $('.editControl').attr('contenteditable','false');
                  $('.visibilityControl').addClass('hidden');
          
                  return false;
                }

            });

        return MovieView;    

    });