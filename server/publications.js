Meteor.publish( 'guests', function() {
  // Define what data to publish to the client (and how) here.
return Rsvp.find();
}); 

Meteor.publish('gifts', function(){
	return Gift.find();
})