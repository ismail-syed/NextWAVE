 Template.registerHelper("isAdmin", function(){
    // Production: kM38yPDw6EPgCCMto
    // Dev: swTFhj4KiGweGmeuL
    if(Meteor.user()._id === "kM38yPDw6EPgCCMto"){
      return true;
    }
    return false;
  });

  Template.posts.helpers({
    posts: function () {
      return Coursepacks.find({}, {sort: {createdAt: -1}} );
    }   
  });