define( 
    function () {

        var Template = function () {
     
              this.templateUnderscore = '<div class="panel panel-success">'+
                      '<div class="panel-heading">'+
                          '<div class="pull-left"><h4><strong><div class=editControl id="titleMovie"><%= title %></div></strong><small><div class=editControl id="yearMovie"><%= year %></div></small></h4></div>'+
                         '<div class="pull-right">'+
                            '<button type="button" class="close" id="removeButton"><span aria-hidden="true"><span class="glyphicon glyphicon-remove"></span><span class="sr-only">Close</span></button>'+
                          '</div>'+
                          '<div class="pull-right">' +
                             '&nbsp;&nbsp;&nbsp;'+
                          '</div>'+
                          '<div class="pull-right">'+
                            '<button type="button" class="close" id="editButton"><span aria-hidden="true"><span class="glyphicon glyphicon-pencil"></span></span><span class="sr-only">Edit</span></button>'+
                          '</div>'+
                          '<div class="clearfix"></div>'+
                      '</div>'+
                         '<ul class="list-group">'+
                          '<li class="list-group-item"><em><div class=editControl id="genreMovie"><%= genre %></div></em></li>'+
                        '</ul>'+
                        '<div class="panel-body">'+
                          '<p><div class=editControl id="synapsisMovie"><%= synapsis %></div></p>'+
                        '</div>'+
                        '<div class="hidden text-center visibilityControl" id="buttonHidden"><button type="submit" class="btn btn-success" id="theEditButton">Save changes</button></div>'+
                    '</div>';

                    this.get = function(){return this.templateUnderscore;}
            }; 
        // Public methods
        Template.prototype.get = function() {
          return this.templateUnderscore;
        }

        return Template;
});

