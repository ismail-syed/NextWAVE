 // HELPERS
 Template.user.helpers({
    name: function() {
       return Meteor.user().username || Meteor.user().profile.name
    }
  });

 // EVENTS