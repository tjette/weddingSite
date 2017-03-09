Template.registryStats.helpers({
'gift':function(){
    return Gift.find().fetch();
}
});

Template.registryStats.events({
    //add your events here
});

Template.registryStats.onCreated(function () {
    //add your statement here
});

Template.registryStats.onRendered(function () {
    //add your statement here
});

Template.registryStats.onDestroyed(function () {
    //add your statement here
});

