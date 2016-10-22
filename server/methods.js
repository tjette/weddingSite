Meteor.methods({
  sendEmail: function (emailObj) {
   //actual email sending method
    Email.send({
      to: emailObj.email + ', travisjette@gmail.com',
      from: 'travisjette@gmail.com',
      subject: emailObj.subject,
      html: emailObj.message
    });
  },
  addRsvp: function(email, party){
    return Rsvp.insert({
      email: email,
      party: party
    });
  },
  removeRsvp: function(){
    return Rsvp.remove({});
  }
});