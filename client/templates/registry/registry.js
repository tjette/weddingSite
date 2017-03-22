Template.registry.onRendered(function(){
    AOS.init();
})

Template.registry.events({
    'click .registryGift': function(event, template){
        event.preventDefault();
        $('#myModalT').modal('show');
    },
      "mouseover .gift": function(event, template) {
      $(this).closest(".registryInfo").find('info').slideDown();

    console.log("mousehover", event);
    
    }
  

});