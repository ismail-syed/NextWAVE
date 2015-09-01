// HELPERS


// EVENTS
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