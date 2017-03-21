Template.registry.onRendered(function(){
    AOS.init();
})

Template.registry.events({
    'click .registryGift': function(event, template){
        event.preventDefault();
        $('#myModalT').modal('show');
    }

});