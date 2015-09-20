// EVENTS
Template.postDetails.events({
   "submit #addCommentForm": function(e) {
     // alert("start submitee")
      e.preventDefault();
      var comment = e.target.addComment.value;
   	  Comments.insert({
   	  	text: comment, 
   	  	commenterId: Meteor.userId(),
	  	commenterName: Meteor.user().username, 
	  	parentPost: this._id, 
   	  	createdAt: new Date()
   	  });
     
      e.target.addComment.value = "";
    }
  });