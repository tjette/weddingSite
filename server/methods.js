 let Stripe = StripeAPI( Meteor.settings.private.stripe );

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
  },
  
  processPayment: function( charge ) {
    check( charge, {
      amount: Number,
      currency: String,
      source: String,
      description: String,
      receipt_email: String
    });

    let handleCharge = Meteor.wrapAsync( Stripe.charges.create, Stripe.charges ),
        payment      = handleCharge( charge );

    return payment;
  }
});