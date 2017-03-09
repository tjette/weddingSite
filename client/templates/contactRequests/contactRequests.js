Template.contactRequests.helpers({
'contact':function(){
    return Contacts.find().fetch();
}
});

Template.contactRequests.events({
    //add your events here
});

Template.contactRequests.onCreated(function () {
    //add your statement here
});

Template.contactRequests.onRendered(function () {
    //add your statement here
});

Template.contactRequests.onDestroyed(function () {
    //add your statement here
});

