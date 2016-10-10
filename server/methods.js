Meteor.methods({
  sendEmail: function (text) {
   //actual email sending method
    Email.send({
      to: 'travisjette@gmail.com',
      from: 'travisjette@gmail.com',
      subject: 'New Message from Wedding Site',
      text: text
    });
  }
});