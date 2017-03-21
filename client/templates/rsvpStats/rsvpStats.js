Template.rsvpStats.helpers({
    'totalRsvp': function () {
        return Rsvp.find().count();
    },

    totalYes: function () {
        return Rsvp.find({"attend": "yes"}).count();
    },

    totalNo: function () {
        return Rsvp.find({'attend': false}).count();
    },
    'allRsvp': function () {
        return Rsvp.find().fetch();
    },
     totalInParty: function(){
        return Session.get("totalParty");
    }

});

Template.rsvpStats.events({
    //add your events here
});

Template.rsvpStats.onCreated(function () {
    //add your statement here
     Meteor.call('totalInParty',function(err,resp){
  console.log(resp);
    _.each(resp,function(e){
      console.log(e)
      Party.insert(e); // insert to local collection
    })
  })
});

Template.rsvpStats.onRendered(function () {
    //add your statement here
});

Template.rsvpStats.onDestroyed(function () {
    //add your statement here
});

