

Template.giftForm.helpers({
    processing() {
        return Template.instance().processing.get();
    },
    paymentSucceeded() {
        return Template.instance().paymentSucceeded.get();
    }
});






Template.giftForm.events({
    'submit .registry': function(event, template){
        event.preventDefault();

        var registryData = $(event.target).serializeArray();

        console.log('registryData',registryData);

        var registryObj = {};

        _.each(registryData, function(e){
            console.log(e);
            if(e.value) {
                registryObj[e.name] = e.value || false;
            } else {
                alert("You must enter " + e.name);

            }

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

        $('#myModalT').modal('hide');
    }
});

Template.giftForm.onCreated(function(){
// Stripe.setPublishableKey('pk_test_B8wWCBkUB5105eXRIJyJqTa0');
let template = Template.instance();


    Session.set('openForm', false);
    // template.selectedService  = new ReactiveVar( false );
    Session.set('gift', false);
    template.processing       = new ReactiveVar( false );


    template.checkout = StripeCheckout.configure({
        key: "pk_test_B8wWCBkUB5105eXRIJyJqTa0",
        image: './images/engagement1.jpg',
        locale: 'auto',
        token( token ) {
            var registryObj = Session.get('gift');
            charge  = {
                amount: parseFloat(token.amount * 100) || parseFloat(registryObj.giftAmount * 100),
                currency: token.currency || 'usd',
                source: token.id,
                description: token.description || registryObj.giftType,
                receipt_email: token.email
            };

            Meteor.call( 'processPayment', charge, ( error, response ) => {
                if ( error ) {
                    
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



