Template.stripe.helpers({
  processing() {
    return Template.instance().processing.get();
  },
  // showForm:function(){
  //var show = Session.get('openForm');
  //if(show === true){
  //   return true;
  //}else{
  //   return false;
  // }
  //},
  paymentSucceeded() {
    return Template.instance().paymentSucceeded.get();
  },
  thisGift: function(){
    return Gift.findOne(Session.get('gift'));
  }
});


Template.stripe.events({
  'click .registryGift': function(event, template){
      event.preventDefault();
     $('#myModalT').modal('show');
  }

});









 



