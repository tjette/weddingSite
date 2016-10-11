Template.home.helpers({

});

Template.home.events({
  'click #homeHeader': function(event, template){
    var weddingDate = new Date("07/29/2017");
    
$( "#homeHeader" ).click(function() {
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

      document.getElementById('homeHeader').innerHTML = days + " dDays until wedding";
    }
  
  // $( ".homeHeader" ).html( "<div>Were Getting Married in </div>" );

})
}
});