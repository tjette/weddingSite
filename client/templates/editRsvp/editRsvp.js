Template.editRsvp.helpers({
'thisRsvp':function(){
    return Rsvp.findOne(Session.get('params').id);
},
 'going': function(){
     return Session.get('going');
 }
});

Template.editRsvp.events({
    'submit .editRsvp': function(event, template){
        event.preventDefault();

        var formData = $(event.target).serializeArray();

        console.log('formData',formData);

        var editrsvpObj = {};

        _.each(formData, function(e){
            console.log(e);
            editrsvpObj[e.name] = e.value || false;

        })
        console.log(editrsvpObj);
        editrsvpObj.submittedOn = new Date();

        swal({
            title: "Are you sure?",
            text: "Are you sure that this is correct?",
            type: "warning",
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonText: "Yes, looks good!",
            confirmButtonColor: "#ec6c62"
        }, function (isConfirm) {
            if (isConfirm === true) {
                var rsvpId = Session.get('params').id;
                Rsvp.update({_id:rsvpId},{$set:editrsvpObj})
                swal("Submitted!", "Your Edited RSVP has been submitted.", "success");
                emailObj = editrsvpObj;
                emailObj._id = rsvpId;
                emailObj.subject = " Edited Wedding RSVP Comfirmation: Travis Jette and Rachelle";
                emailObj.message = emailObj.firstName + " - <br><br> Thank you for submitting the edited RSVP! <br><br> If at any time before the wedding you wish to edit or cancel your RSVP, click this link  <a href='http://localhost:7729/editRsvp?id="+ emailObj._id +"'>Change RSVP</a> <br><br> - Travis and Rachelle";
                Meteor.call('sendEmail', emailObj)

                console.log('edited rsvp object',Rsvp.findOne(Session.get('params').id))
            } else {
                swal("Cancelled", "Your Rsvp has been cancelled :)", "error");
            }
        });

    },
    'change .attending':function(event, template){
        console.log(event.target.value);

        var going= event.target.value || false;

        Session.set('going', going)
    }
});

Template.editRsvp.onCreated(function () {

Tracker.autorun(function(){
    if(Rsvp.find({_id:Session.get("params").id}).count()){
    var going = Rsvp.findOne(Session.get('params').id).attend || false

    Session.set('going', going);
    }
})
});

Template.editRsvp.onRendered(function () {

});

Template.editRsvp.onDestroyed(function () {
    //add your statement here
});

