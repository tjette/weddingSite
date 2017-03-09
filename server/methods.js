Stripe = StripeAPI( 'sk_test_U9ilhQdWlUXiQatPH4iDbzD1' );
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
  giftCard: function(registryObj){
    return Gift.insert({
      registryObj:registryObj

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
  },

  instagram: function(){
       HTTP.call( 'GET', 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=ACCESS-TOKEN', {}, function( error, response ) {
        if ( error ) {
          console.log( error );
          } else {
          console.log( response );
        }

      });
  },
  scrapeData: function(){
      data = Scrape.url("https:www.instagram.com/tags/millertime");

  },
  removeGifts:function(){
    return Gift.remove({});
  },
  removeRsvps:function(){
    return Rsvp.remove({});
  },
  removeContacts:function(){
    return Contacts.remove({});
  }
});