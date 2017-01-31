Stripe = StripeAPI( 'sk_test_PLEp1LJbTXXO0940yTtrQEAL' );

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
  guestDistance: function(distance){
    return Route.insert({
      distance: distance
    });
  },
  giftCard: function(firstName, lastName, giftType, giftAmount, email, message){
    return Gift.insert({
      firstName: firstName,
      lastName: lastName,
      giftType: giftType,
      giftAmount: giftAmount,
      email: email,
      message: message

    });
  },
  processPayment: function( charge ) {
    check( charge, {
      amount: Number,
      currency: String,
      source: String,
      description: String,
      receipt_email: String
    });



    var handleCharge = Meteor.wrapAsync( Stripe.charges.create, Stripe.charges ),
        payment      = handleCharge( charge );

    return payment;
  }
});