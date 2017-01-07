Template.stripe.helpers({
  processing() {
    return Template.instance().processing.get();
  },
  paymentSucceeded() {
    return Template.instance().paymentSucceeded.get();
  }
});


Template.stripe.events({
  'click [data-service]' ( event, template ) {
    const pricing = {
      'Date Night': {
        amount: 5000,
        description: "Gift towards a date"
      },
      'Home Improvement': {
        amount: 5000,
        description: "Home improvements that are necessaary"
      },
      'Honey Moon': {
        amount: 7500,
        description: "Help us take a trip to celebrate our marriage"
      }
    };

    let service = pricing[ event.target.dataset.service ];

    template.selectedService.set( service );
    template.processing.set( true );

    template.checkout.open({
      name: 'Rachelle & Travis Wedding',
      description: service.description,
      amount: service.amount,
      bitcoin: true
    });
  }
});


Template.stripe.onCreated(function(){
 let template = Template.instance();

  template.selectedService  = new ReactiveVar( false );
  template.processing       = new ReactiveVar( false );

  template.checkout = StripeCheckout.configure({
    key: 'pk_test_P5VCIAn9TaffqxE4GCmedQps',
    image: './images/engagement1.jpg',
    locale: 'auto',
    token( token ) {
      let service = template.selectedService.get(),
          charge  = {
            amount: token.amount || service.amount,
            currency: token.currency || 'usd',
            source: token.id,
            description: token.description || service.description,
            receipt_email: token.email
          };

      Meteor.call( 'processPayment', charge, ( error, response ) => {
        if ( error ) {
          template.processing.set( false );
           swal("Error!", "Something went wrong processing the payment", "error");
        } else {
          swal("Good job!", "Your payment submitted!", "success")
        }
      });
    },
    closed() {
      template.processing.set( false );
    }
  });
});






 



