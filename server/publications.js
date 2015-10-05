// Meteor.publish definitions

Meteor.publish("posts", function() {
	return Posts.find();
});
