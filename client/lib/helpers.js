 Template.registerHelper("isAdmin", function(){
    if(Meteor.user()._id === "swTFhj4KiGweGmeuL"){
      return true;
    }
    return false;
  });

  Template.posts.helpers({
    posts: function () {
      return Coursepacks.find({}, {sort: {createdAt: -1}} );
    }   
  });