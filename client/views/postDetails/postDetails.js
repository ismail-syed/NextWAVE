// EVENTS
Template.postDetails.events({
    "click #subscribedRadioButton": function(e) {
      if(!Meteor.user().profile || !Meteor.user().profile.subscribedPosts ){
          Meteor.users.update({_id:Meteor.user()._id}, { $set: {"profile.subscribedPosts" : []} });
      }
      if(!this.subscribers) {
      	this.subscribers = [];
      }
    	var checkBox = e.target;
    	var subscribedPosts = Meteor.user().profile.subscribedPosts;


		if(checkBox.checked) {
    		// The Meteour user object should know about the subscribed post
    		subscribedPosts.push({
    			"postId" : this._id, 
    			"postName" : this.name
    		});
	    	Meteor.users.update({_id:Meteor.user()._id}, { $set: {"profile.subscribedPosts" : subscribedPosts} });
    		
    		// The post object should know about the user subscribing
    		this.subscribers.push({
    			"userId": Meteor.userId(),
    			"user": Meteor.user().username
    		});
    	}
    	else {

    		// Remove this subscribed post from the user profile
    		var removePostIndex;
    		for(var i=0; i<subscribedPosts.length; i++){
    			if(this._id === subscribedPosts[i].postId){
    				removePostIndex = i;
    			}
    		}
    		subscribedPosts.splice(removePostIndex, 1);
	    	Meteor.users.update({_id:Meteor.user()._id}, { $set: {"profile.subscribedPosts" : subscribedPosts} });
    		

	    	// Remove this user from the subscribers of this post
	    	var removeSubscriberIndex;
	    	for(var i=0; i<this.subscribers.length; i++){
    			if(this._id === this.subscribers[i]){
    				removeSubscriberIndex = i;
    			}
    		}
			this.subscribers.splice(removeSubscriberIndex, 1);
    	}

    }
  });

Template.postDetails.helpers({
	isSubscribed: function(){
	   var isSubscribed; 
	   var subscribedPosts = Meteor.user().profile.subscribedPosts;

	   for(var i=0; i < subscribedPosts.length; i++){
	   	if( this._id === subscribedPosts[i].postId ){
	   		return true; 
	   	}
	   }
	   return false; 
	}
});