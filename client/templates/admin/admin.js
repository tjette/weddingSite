Template.admin.helpers({
    //add you helpers here
    totalInParty: function(){
    	return Session.get("totalParty");
    }
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

     Meteor.call('totalParty', function(err, resp){
      Session.set('totalParty', resp[0].numberOfGuests || 0)
      console.log(resp, "resp");
    });
});

Template.admin.onRendered(function () {
    //add your statement here
});

Template.admin.onDestroyed(function () {
    //add your statement here
});

