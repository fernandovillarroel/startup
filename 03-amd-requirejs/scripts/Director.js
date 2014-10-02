define( 
    function () {
        // create your module here
        var Director = function (name) {

          this.attributes = {};
          this.attributes['name'] = name;
          this.attributes['quotes'] = []; 
       

          //Privileged methods (setters and getters)
          this.set = function(attr,value) { this.attributes[attr] = value;}
          this.get = function(attr) {return this.attributes[attr];}
        };

        // Public methods
        Director.prototype.speak = function(){ 
          var cantQuotes = this.attributes['quotes'].length;
          var randomQuote = Math.floor(Math.random() * cantQuotes);
          var directorSays = this.attributes['name'] + ' says: ' + this.attributes['quotes'][randomQuote];
          return directorSays;
        }

        return Director;
      });