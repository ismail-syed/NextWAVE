// HELPERS 
 Template.posts.helpers({
    posts: function () {
      return Posts.find({}, {sort: {createdAt: -1}} );
    }     
  });

// EVENTS
Template.post.events({
    "click .delete": function () {
      Meteor.call("deletePost", this._id);
    }
  });
 