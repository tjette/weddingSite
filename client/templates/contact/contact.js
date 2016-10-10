Template.contact.helpers({

});

Template.contact.events({
"submit .contactForm": function(event, template){
event.preventDefault();
var firstName= event.target.firstName.value;
var lastName= event.target.lastName.value;
var email=event.target.email.value;
var phone=event.target.phone.value;
var message=event.target.message.value;


// Contacts.insert({
//   firstName : firstName,
//   lastName  : lastName,
//   email     : email,
//   phone     : phone,
//   message   : message 
// });
 var dataText = "Message from: " + firstName + " " + lastName + "\rEmail: " + email + "\rPhone: " + phone + "\rContent:" + message;
  
  Meteor.call('sendEmail', dataText, function(resp,err){
    if(resp){
    alert('Email sent.', resp);
  } else {
    alert("There was an error", err)
  }
  console.log(dataText);
  });
 //throwAlert is my helper method which creates popup with message
 

}
});