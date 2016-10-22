Template.rsvp.helpers({
    'rsvp': function () {
        return Rsvp.find({'_id': Session.get('rsvp')}).fetch();
    },
    'going': function(){
        return Session.get('going');
    }
});


Template.rsvp.events({
    "submit .rsvpForm": function (event, template) {
        event.preventDefault();

        var formData = $(event.target).serializeArray();

        console.log('formData',formData);

        var rsvpObj = {};

        _.each(formData, function(e){
            console.log(e);
            rsvpObj[e.name] = e.value || false;

        })
        console.log(rsvpObj);
        rsvpObj.submittedOn = new Date();


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
                var rsvpId = Rsvp.insert(rsvpObj);
                swal("Submitted!", "Your RSVP has been submitted.", "success");
                emailObj = rsvpObj;
                emailObj._id = rsvpId;
                emailObj.subject = "Wedding RSVP Comfirmation: Travis Jette and Rachelle";
                emailObj.message = emailObj.firstName + " - <br><br> Thank you for submitting the RSVP!  This is your official RSVP confirmation. <br><br> If at any time before the wedding you wish to edit or cancel your RSVP, click this link  <a href='http://localhost:7729/editRsvp?id="+ emailObj._id +"'>Change RSVP</a> <br><br> - Travis and Rachelle";
                Meteor.call('sendEmail', emailObj)
            } else {
                swal("Cancelled", "Your RSVP has been cancelled", "error");
            }
        });



        // console.log("data", data);

    },

    'change .attending':function(event, template){
        console.log(event.target.value);

        var going= event.target.value || false;

        Session.set('going', going)
    }
});

Template.rsvp.onCreated(function () {

    Session.set('going', true);

});