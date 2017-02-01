Template.stripe.helpers({
  processing() {
    return Template.instance().processing.get();
  },
   showForm:function(){
  var show = Session.get('openForm');
  if(show === true){
     return true;
  }else{
     return false;
   }
  },
  paymentSucceeded() {
    return Template.instance().paymentSucceeded.get();
  },
  thisGift: function(){
    return Gift.findOne(Session.get('gift'));
  }
});


Template.stripe.events({
  'click .registryGift': function(event, template){
    return Session.set('openForm', true);
  },
  'submit .registry': function(event, template){
    event.preventDefault();

     var registryData = $(event.target).serializeArray();

    console.log('registryData',registryData);

    var registryObj = {};

    _.each(registryData, function(e){
        console.log(e);
        registryObj[e.name] = e.value || false;

    })
    console.log(registryObj);
     Meteor.call('giftCard', registryObj);
    template.processing.set( true );

    Session.set('gift', registryObj);
   
    template.checkout.open({
      name: 'Rachelle & Travis Wedding',
      description: registryObj.giftType,
      amount: registryObj.giftAmount * 100
    });

  }
  
  // 'click [data-service]' ( event, template ) {

    

  //   const pricing = {
  //     'Date Night': {
  //       amount: 2500,
  //       description: "Gift towards a date"
  //     },
  //     'Home Improvement': {
  //       amount: 2500,
  //       description: "Home improvements that are necessaary"
  //     },
  //     'Honey Moon': {
  //       amount: 5000,
  //       description: "Help us take a trip to celebrate our marriage"
  //     }
  //   };

  //   let service = pricing[ event.target.dataset.service ];

//     template.selectedService.set( service );
//     template.processing.set( true );


    // template.checkout.open({
    //   name: 'Rachelle & Travis Wedding',
    //   description: service.description,
    //   amount: service.amount
    // });
//   }
});


Template.stripe.onCreated(function(){
 let template = Template.instance();

  Session.set('openForm', false);
  // template.selectedService  = new ReactiveVar( false );
  Session.set('gift', false);
  template.processing       = new ReactiveVar( false );
  

  template.checkout = StripeCheckout.configure({
    key: 'pk_test_P5VCIAn9TaffqxE4GCmedQps',
    image: './images/engagement1.jpg',
    locale: 'auto',
    token( token ) {
      var registryObj = Session.get('gift');
        charge  = {
            amount: token.amount || registryObj.giftAmount,
            currency: token.currency || 'usd',
            source: token.id,
            description: token.description || registryObj.message,
            receipt_email: token.email
          };

      Meteor.call( 'processPayment', charge, ( error, response ) => {
        if ( error ) {
          template.processing.set( false );
          console.log(error);
           swal("Error!", "Something went wrong processing the payment",'error');
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






 



