function MovieObserver (){
  this.update = function(event,title) {
  	if (event == 'play')
      console.log('Playing '+title+'... (MovieObserver)');
    else if (event == 'stop')
      console.log(title+' stopped. (MovieObserver)');
    else if (event == 'download')
      console.log('Downloading '+title+'...');
  };

  $.subscribe('movies',this.update);
}

(function(q) {
    var topics = {},
        subUid = -1;
    
    q.publish = function (topic, args) {
        topics[topic] &&  q.each(topics[topic],function() {
            this.handle.apply(q,args);
        })
    };
    
    q.subscribe = function (topic,handler) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            handle: handler 
        });
        return token;
    };
    
    q.unsubscribe = function (token) {
        for ( var topic in topics ) {
            if ( topics[topic] ) {
                var susc = topics[topic];
                q.each(susc, function(i,val) {
                   if (susc[i].token === token) {
                       susc.splice(i,1);
                       return token;
                   }
                });
            }
        }
        return false;
    };
})(jQuery);
