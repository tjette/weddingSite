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
    'totalAttendees':function(){
        return Attendees.findOne({_id: 'master'}).attendees;
    }
});

Template.rsvpStats.events({
    //add your events here
});

Template.rsvpStats.onCreated(function () {
    //add your statement here
});

Template.rsvpStats.onRendered(function () {
    //add your statement here
});

Template.rsvpStats.onDestroyed(function () {
    //add your statement here
});

