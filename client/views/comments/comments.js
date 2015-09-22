// HELPERS 
 Template.comments.helpers({
    comments: function () {
      return Comments.find( {parentPost: this._id} );
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
