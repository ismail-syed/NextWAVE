// HELPERS 
 Template.comments.helpers({
    comments: function () {
      return this.comments
    },
  });

 Template.comment.helpers({
 	ownsComment: function(){
		if(this.commenterId === Meteor.userid()){
			return true;
		}
		return false; 
	}
 });
