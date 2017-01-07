
var weddingDate = new Date("07/29/2017 3:0 PM");
countdown = new ReactiveCountdown(weddingDate);


countdown.start(function() {

  // do something when this is completed

})

Template.countdown.helpers({

     //formatDate: function(date){
     //  return moment(date).format('DD-HH-MM-SS');
     //},

    getCountdown: function() {
        Session.set('count',countdown);
        return countdown.get();
    }

});