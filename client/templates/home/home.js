Template.home.helpers({

});

Template.home.events({

});

Template.home.onRendered(function(){
AOS.init();
var weddingDate = new Date("07/29/2017 3:0 PM");
    
    var currentDate = new Date();
     var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var distance = weddingDate - currentDate;
    if(distance < 0){
      document.getElementById('homeHeader').innerHTML = "Expired";
    } else {
       var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hour);
        var minutes = Math.floor((distance % hour) / minute);
        var seconds = Math.floor((distance % minute) / second);

      document.getElementById('homeHeader').innerHTML = days + " days ";
      document.getElementById('homeHeader').innerHTML += hours + " hours ";
      document.getElementById('homeHeader').innerHTML += minutes + " minutes ";
      document.getElementById('homeHeader').innerHTML += seconds + " seconds until the wedding! ";


    }
    
});