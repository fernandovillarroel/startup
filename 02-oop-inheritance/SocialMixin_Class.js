var SocialMixin = function(){

	this.share = function(friendName){
		console.log('Sharing '+ this.attributes['title'] + ' with '+friendName);
	};
	this.like = function(){
		console.log('I like '+ this.attributes['title']);
	}
};