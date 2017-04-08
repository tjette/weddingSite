Template.registry.onRendered(function(){
    AOS.init();
    Meteor.subscribe('registryOptions');
    Session.set('activeGift','target');
})

Template.registry.helpers({
    'activeGift': function(){
        return RegistryOptions.findOne(Session.get('activeGift'));
    }
})
Template.registry.events({
    'click .registryGift': function(event, template){
        event.preventDefault();
        $('#myModalT').modal('show');
    },
      "mouseover .gift": function(event, template) {

      var theGift = $(event.target).attr('gift');

          Session.set('activeGift', theGift);


    console.log("mousehover", event);
    
    }
  

});


// var registryObj = {};
// registryObj._id = 'target';
// registryObj.image = '/images/targetLogo2.jpg'
// registryObj.title = 'Target Registry'
// registryObj.description = 'View and purchase gifts from our registry.'
// registryObj.link='http://target.com'
// RegistryOptions.insert(registryObj)