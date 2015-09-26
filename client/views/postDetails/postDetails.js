// EVENTS
Template.postDetails.events({
    "click #subscribedRadioButton": function(e) {
      debugger; 
      if(!Meteor.user().profile.subscribedPosts){
          Meteor.users.update({_id:Meteor.user()._id}, { $set: {"profile.subscribedPosts" : []} });
      }
    	var checkBox = e.target;
    	var subscribedPosts = Meteor.user().profile.subscribedPosts;

    		if(checkBox.checked) {
	    		subscribedPosts.push({
	    			"postId" : this._id, 
	    			"postName" : this.name
	    		});
		    	Meteor.users.update({_id:Meteor.user()._id}, { $set: {"profile.subscribedPosts" : subscribedPosts} });
	    	}
	    	else {
	    		var removeIndex;
	    		for(var i=0; i<subscribedPosts.length; i++){
	    			if(this._id === subscribedPosts[i].postId){
	    				removeIndex = i;
	    			}
	    		}
	    		subscribedPosts.splice(removeIndex, 1);
		    	Meteor.users.update({_id:Meteor.user()._id}, { $set: {"profile.subscribedPosts" : subscribedPosts} });
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