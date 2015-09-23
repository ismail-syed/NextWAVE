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
    },
    "click #btn-subscribe": function (e) {
    	var btnSubscribe = e.target;
    	var btnUnsubscribe = $(btnSubscribe).next(); 
    	
    	$(btnUnsubscribe).css('display', 'block');
    	$(btnSubscribe).css('display', 'none');
    },
    "click #btn-unsubscribe": function (e) {
    	var btnUnsubscribe = e.target
    	var btnSubscribe = $(btnUnsubscribe).prev();
    	
    	$(btnSubscribe).css('display', 'block');
    	$(btnUnsubscribe).css('display', 'none');
    }
  });