// Subscriptions
Meteor.subscribe("posts");

Template.adminUi.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});