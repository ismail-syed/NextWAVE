 Template.registerHelper("isAdmin", function(){
    if(Meteor.user()._id === "swTFhj4KiGweGmeuL"){
      return true;
    }
    return false;
  });