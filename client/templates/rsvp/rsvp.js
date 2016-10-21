Template.rsvp.helpers({

});


Template.rsvp.events({
"submit .rsvpForm": function(event, template){
  event.preventDefault();

  var email = event.target.email.value;
  var party = event.target.party.value;

  var data = {
    email : email,
    party : party,
  }

  // Rsvp.insert({
  //   email: email,
  //   party: party
  // });

  Meteor.call('addRsvp',data);

  console.log("data", data);  

  $("#myModal").modal('show');
 
  
}
});