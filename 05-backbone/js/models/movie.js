define(["underscore","backbone"],
    function(Underscore, Backbone) {

        var Movie = Backbone.Model.extend({
            defaults:{
            	title: 'Not title',
            	year: 'Not year',
            	genre: 'Not genre',
            	synapsis: 'Not synapsis'
            },
            initialize: function(){
              console.log('[Movie created! Title: '+this.get("title")+' ('+this.get("year")+'), genre: '+this.get("genre")+', synapsis: '+this.get("synapsis")+']');
            }
        });

        return Movie;

});      