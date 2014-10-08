require.config({
    paths: {
        jQuery: 'libs/jquery-2.1.1.min',
        bootstrap: 'bootstrap.min',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        localStorage: 'libs/backbone.localstorage'
    },

    shim: {
        underscore: {
            exports: '_'
         },
        backbone: {
            deps: ['jQuery','underscore'],
            exports: 'Backbone'
         }
    }
});


require(["jQuery","bootstrap", "views/PanelView"],
    function(jquery,Bootstrap,PanelView) { 
       $(document).ready(function() {
            var panelPpal = new PanelView;
       });
    }
);