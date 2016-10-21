Template.rsvp.helpers({
'rsvp': function(){
  return Rsvp.find({'_id':Session.get('rsvp')}).fetch();
},
'allRsvp':function(){
  return Rsvp.find().fetch();
}
});


Template.rsvp.events({
"submit .rsvpForm": function(event, template){
  event.preventDefault();

  var title = event.target.title.value;
  var email = event.target.email.value;
  var firstName = event.target.firstName.value;
  var lastName = event.target.lastName.value;
  var attend = event.target.attend.value;
  var party = event.target.party.value;

  var data = {
    title : title,
    email : email,
    firstName : firstName,
    lastName : lastName,
    attend : attend,
    party : party
  }

 

  // Rsvp.insert({
  //   email: email,
  //   party: party
  // });

  Meteor.call('addRsvp',data);

  // var rsvpId = data;
  // Session.set('rsvp', rsvpId);
  // console.log(rsvpId);

  

  console.log("data", data);  

},

'click .editRsvp': function(){
 var editPrompt= prompt("Please Enter Your Name");
}
});