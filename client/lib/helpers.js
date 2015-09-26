 Template.registerHelper("isAdmin", function(){
    if(Meteor.user()._id === "CCLje5sC2K6ptyDLn"){
      return true;
    }
    return false;
  });