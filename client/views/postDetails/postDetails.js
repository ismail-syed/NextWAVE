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

// When rendered display subscribe or unsubscribed button based on the user's profile
// Template.postDetails.onRendered(function () {
//   this.autorun(function(c) {
//     var user = Meteor.user()
//     var name = user && user.profile && user.profile.name;
//     // debugger;
//     if (name) {
//       c.stop();
//     }
//     if ( Meteor.user() )
//     {
//     	debugger;

// 	   var isSubscribed; 
// 	   var subscribedPosts = Meteor.user().profile.subscribedPosts;

// 	   for(var i=0; i < subscribedPosts.length; i++){
// 	   	if( this._id === subscribedPosts[i] ){
// 	   		isSubscribed = true; 
// 	   	}
// 	   }
// 	   isSubscribed = false; 

// 	   if(subscribedPosts){
// 	   	$("btn-unsubscribe").css('display', 'block');
// 	   }
// 	   else{
// 	   	$("btn-subscribe").css('display', 'block');
// 	   }  
//     }

//   }
//   );
// });

