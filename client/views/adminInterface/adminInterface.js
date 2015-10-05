Template.adminUi.events({
   "submit #createEventForm": function(e) {
      e.preventDefault();
      var createPostObj = {
        name: e.target.eventName.value,
        date: e.target.eventDateTimeStart.value.split(" ")[0],
        timeStart: e.target.eventDateTimeStart.value.split(" ")[1] + e.target.eventDateTimeStart.value.split(" ")[2], 
        timeEnd: e.target.eventDateTimeEnd.value.split(" ")[1] + e.target.eventDateTimeEnd.value.split(" ")[2],
        location: e.target.eventLocation.value, 
        description: e.target.eventDescription.value, 
        comments: [], 
        subscribers: [],
        notifications: [], 
        createdAt: new Date()
      }

      Meteor.call("createPost", createPostObj);

      e.target.eventName.value = "";
      e.target.eventDateTimeStart.value = "";
      e.target.eventDateTimeEnd.value = "";
      e.target.eventLocation.value = "";
      e.target.eventDescription.value = "";
    }
  });