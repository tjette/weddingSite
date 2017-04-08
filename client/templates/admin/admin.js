Template.admin.helpers({
    //add you helpers here
   
});

Template.admin.events({
    //add your events here
});

Template.admin.onCreated(function () {
    //add your statement here
    Meteor.subscribe( 'guests');
    console.log("guest data");

    Meteor.subscribe( 'gifts');
    console.log("gift data");

     
});

Template.admin.onRendered(function () {
    //add your statement here
});

Template.admin.onDestroyed(function () {
    //add your statement here
});

