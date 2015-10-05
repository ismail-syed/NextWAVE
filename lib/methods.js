// Meteor.method definitions
Meteor.methods({
	createPost: function( postObj ) {
		Posts.insert( postObj );
	},

	deletePost: function( id ) {
		Posts.remove( id );
	},

	createNotification: function( post, notificationsArray ){
		Posts.update({_id: post._id}, { $set: {"notifications" : notificationsArray} });
	},

	addComment: function( post, commentsArray ){
	     Posts.update({_id: post._id}, { $set: {"comments" : commentsArray} });
	}
})