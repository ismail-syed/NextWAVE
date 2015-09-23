// EVENTS
Template.postDetails.events({
   // "submit #addCommentForm": function(e) {
   //   // alert("start submitee")
   //    e.preventDefault();
   //    var comment = e.target.addComment.value;
   // 	  Comments.insert({
   // 	  	text: comment, 
   // 	  	commenterId: Meteor.userId(),
	  // 	commenterName: Meteor.user().username, 
	  // 	parentPost: this._id, 
   // 	  	createdAt: new Date()
   // 	  });
     
   //    e.target.addComment.value = "";
   //  },
   //  "click #btn-subscribe": function (e) {
   //  	var btnSubscribe = e.target;
   //  	var btnUnsubscribe = $(btnSubscribe).next(); 

   //  	var subscribedPosts = Meteor.user().profile.subscribedPosts;
   //  	if(!subscribedPosts){
   //  		Meteor.user().profile.subscribedPosts = [];
   //  	}
   //  	else{
   //  		subscribedPosts.push({
   //  			"postId" : this._id, 
   //  			"postName" : this.name
   //  		});
	  //   	Meteor.users.update({_id:Meteor.user()._id}, { $set: {"profile.subscribedPosts" : subscribedPosts} });
   //  	}

   //  	$(btnUnsubscribe).css('display', 'block');
   //  	$(btnSubscribe).css('display', 'none');
   //  },
   //  "click #btn-unsubscribe": function (e) {
   //  	var btnUnsubscribe = e.target
   //  	var btnSubscribe = $(btnUnsubscribe).prev();
    	
   //  	$(btnSubscribe).css('display', 'block');
   //  	$(btnUnsubscribe).css('display', 'none');
   //  },
    "click #subscribedRadioButton": function(e) {
    	debugger;
    	var checkBox = e.target;
    	var subscribedPosts = Meteor.user().profile.subscribedPosts;

    	if(!subscribedPosts){
    		Meteor.user().profile.subscribedPosts = [];
    	}
    	else{
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

