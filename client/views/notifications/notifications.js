 Template.notifications.helpers({
    allNotifications: function () {
        var subscribedPosts = Meteor.user().profile.subscribedPosts
        var returnPosts = [];
        for(var i=0; i<subscribedPosts.length; i++){
            var post = Posts.findOne({ _id: subscribedPosts[i].postId });
            if(post){
                returnPosts.push(post);
            }
        }
        if(returnPosts.length > 0){
            var notifications = [];

            for(var i=0; i<returnPosts.length; i++){
                for(var j=0; j<returnPosts[i].notifications.length; j++){
                    notifications.push({
                        "post": returnPosts[i].name,
                        "text": returnPosts[i].notifications[j].text,
                        "createdAt": returnPosts[i].notifications[j].createdAt
                        });
                }
            }

            return notifications;
        }
    }     
  });