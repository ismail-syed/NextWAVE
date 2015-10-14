Template.navbar.events({
	"click #navbar-btn-accounts": function(){
		var loginLink = $('#login-name-link');
		loginLink.click();
		loginLink.css("display", "none");
	}
});


 Template.navbar.helpers({
 	"navbarNotifications": function() {
		var subscribedPosts = Meteor.user().profile.subscribedPosts
	    var returnPosts = [];
	    for(var i=0; i<subscribedPosts.length; i++){
	        var post = Posts.findOne({ _id: subscribedPosts[i].postId });
	        if(post){
	            returnPosts.push(post);
	        }
	    }
	    if(returnPosts.length > 0){
	        var notifications = [];
	        var counter = 0; 
	        for(var i=0; i<returnPosts.length; i++){
	            for(var j=0; j<returnPosts[i].notifications.length; j++){
	                notifications.push({
	                    "post": returnPosts[i].name,
	                    "text": returnPosts[i].notifications[j].text,
	                    "_id" : returnPosts[i]._id,
	                    "createdAt": returnPosts[i].notifications[j].createdAt
	                    });
	                counter++;

	                if(counter === 3) {
	                	return notifications
	                }
	            }
	        }

	        return notifications;
	    }
	}
});