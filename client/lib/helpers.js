 Template.registerHelper("isAdmin", function(){
    if(Meteor.user()._id === "DSjgNLjedKwozW3R3"){
      return true;
    }
    return false;
  });