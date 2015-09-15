 Template.registerHelper("isAdmin", function(){
    if(Meteor.user()._id === "PRn7fSDJvWwzYhNYy"){
      return true;
    }
    return false;
  });