
Meteor.startup(function() {  
  GoogleMaps.load({ v: '3', key: 'AIzaSyBUhEuldyQLiY6_by9NTqLi9Bhr25-tHgc', libraries: 'places'});

});


Template.map.helpers({  
'howLong':function(){
  return Session.get('directions').routes[0].legs[0].duration.text
},  
mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        mapTypeControl: false,
        center: new google.maps.LatLng(47.731160, -114.050798),
        zoom: 8
      };
    }
   
  }
});

Template.map.events({

'click .changeDest':function(event,template){
  event.preventDefault();
  Session.set('directions',false);
},  
'click .getDirections': function(event, template){
  event.preventDefault();

  map = GoogleMaps.maps.map
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  directionsDisplay = new google.maps.DirectionsRenderer();
  var barn = new google.maps.LatLng(47.731160, -114.050798);
  
  var mapOptions = {
    zoom:7,
    center: barn
  }

  directionsDisplay.setMap(map.instance);
  directionsDisplay.setPanel(document.getElementById('setPanel'));


  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };

  console.log("request", request);

  

  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      Session.set('directions',result);
      directionsDisplay.setDirections(result);
      console.log(result,"result")
    } else{
      alert('oops, your address didnt register - did you add Missoula to it?')
      console.log("error");
    }
  });

}

});
Template.map.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
     console.log("I'm ready!");
     var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    })
  });
});

Template.map.onRendered(function() {
  this.autorun(function () {
    if (GoogleMaps.loaded()) {
      $("#start").geocomplete();
    }
  });
});