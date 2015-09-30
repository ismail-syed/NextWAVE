// HELPERS


// EVENTS
Template.adminUi.events({
   "submit #createEventForm": function(e) {
     // alert("start submitee")
      e.preventDefault();

      var postEventName = e.target.eventName.value;
      var postDate = e.target.eventDateTimeStart.value.split(" ")[0];
      var postTimeStart = e.target.eventDateTimeStart.value.split(" ")[1] 
                          + e.target.eventDateTimeStart.value.split(" ")[2];
      var postTimeEnd = e.target.eventDateTimeEnd.value.split(" ")[1]
                        + e.target.eventDateTimeEnd.value.split(" ")[2];
      var postLocation = e.target.eventLocation.value;
      var postDescrition = e.target.eventDescription.value;

      Posts.insert({
        name: postEventName, 
        date: postDate,
        timeStart: postTimeStart,
        timeEnd: postTimeEnd, 
        location: postLocation, 
        description: postDescrition,
        subscribers: [],
        createdAt: new Date()
      });

      e.target.eventName.value = "";
      e.target.eventDateTimeStart.value = "";
      e.target.eventDateTimeEnd.value = "";
      e.target.eventLocation.value = "";
      e.target.eventDescription.value = "";
      // alert("submitted");    
    }
  });