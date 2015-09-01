 Template.registerHelper("isAdmin", function(){
    if(Meteor.user()._id === "g3933nmm85FTdpgon"){
      return true;
    }
    return false;
  });