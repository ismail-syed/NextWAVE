// EVENTS
Template.postDetails.events({
    "click #subscribedRadioButton": function(e) {
        // debugger; 
      if(!Meteor.user().profile || !Meteor.user().profile.subscribedPosts ){
          Meteor.users.update({_id:Meteor.user()._id}, { $set: {"profile.subscribedPosts" : []} });
      }
      if(!this.subscribers) {
      	this.subscribers = [];
      }
    	var checkBox = e.target;
    	var subscribedPosts = Meteor.user().profile.subscribedPosts;
      var currSubscribers = this.subscribers; 


		if(checkBox.checked) {
    		// The Meteour user object should know about the subscribed post
    		subscribedPosts.push({
    			postId : this._id, 
    			postName : this.name
    		});
	    	Meteor.users.update({_id:Meteor.user()._id}, { $set: {"profile.subscribedPosts" : subscribedPosts} });
    		
    		// The post object should know about the user subscribing
    		currSubscribers.push({
    			userId: Meteor.userId(),
    			user: Meteor.user().username
    		});

            Posts.update({_id:this._id}, { $set: {"subscribers" : currSubscribers} });
            
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
	    	for(var i=0; i<currSubscribers.length; i++){
    			if(this._id === currSubscribers[i]){
    				removeSubscriberIndex = i;
    			}
    		}
			currSubscribers.splice(removeSubscriberIndex, 1);
            Posts.update({_id:this._id}, { $set: {"subscribers" : currSubscribers} });
    	}

    },
    "submit #addCommentForm": function(e) {
     // alert("start submitee")
      e.preventDefault();
      var comment = e.target.addComment.value;
      var storedComments = this.comments
    
      storedComments.push({
        text: comment,
        commenterId: Meteor.userId(),
        commenterName: Meteor.user().username,
        createdAt: new Date()
      });
      Posts.update({_id:this._id}, { $set: {"comments" : storedComments} });
      e.target.addComment.value = "";
    },
    "submit #createPostUpdateForm": function(e) {
      e.preventDefault();
      var update = e.target.updateText.value;
      var notifications = this.notifications;

      notifications.push({
        text : update, 
        createdAt: new Date()
      });
      Posts.update({_id:this._id}, { $set: {"notifications" : notifications} });
      e.target.updateText.value = "";
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