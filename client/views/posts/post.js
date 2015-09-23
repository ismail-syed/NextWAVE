// HELPERS 
 Template.posts.helpers({
    posts: function () {
      return Posts.find({}, {sort: {createdAt: -1}} );
    }     
  });

// EVENTS
Template.post.events({
    "click .delete": function () {
      Posts.remove(this._id);
    }
  });
 