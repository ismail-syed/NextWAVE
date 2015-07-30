if (Meteor.isClient) {

  Template.user.helpers({
    name: function() {
       return Meteor.user().username || Meteor.user().profile.name
    }
  });


  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });


  Template.registerHelper("isAdmin", function(){
    if(Meteor.user()._id === "sLdbS8cyzrJxy8BKR"){
      return true;
    }
    return false;
  });


 Template.posts.helpers({
    posts: function () {
      return Posts.find({}, {sort: {createdAt: -1}} );
    }     
  });


  Template.adminUi.events({
   "submit #createEventForm": function(e) {
     // alert("start submitee")
      e.preventDefault();

      var postEventName = e.target.eventName.value;
      var postDate = e.target.eventDate.value;
      var postTime = e.target.eventTime.value;
      var postLocation = e.target.eventLocation.value;
      var postDescrition = e.target.eventDescription.value;

      Posts.insert({
        name: postEventName, 
        date: postDate,
        time: postTime, 
        location: postLocation, 
        description: postDescrition,
        createdAt: new Date()
      });

      e.target.eventName.value = "";
      e.target.eventDate.value = "";
      e.target.eventTime.value = "";
      e.target.eventLocation.value = "";
      e.target.eventDescription.value = "";
      // alert("submitted");    
    }
  });

  Template.post.events({
    "click .delete": function () {
      Posts.remove(this._id);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

