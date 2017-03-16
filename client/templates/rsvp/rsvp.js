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
        Session.set('hasErrors',false)
        _.each(formData, function(e){
            console.log(e);
            if(e.value) {


                rsvpObj[e.name] = e.value || false;
            }else {
                alert("You are missing " + e.name);
                Session.set('hasErrors',true);
            }

        })

        if(Session.get('hasErrors')){
            return false
        }
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
            if (isConfirm === true && rsvpObj.attend == "yes") {
                // Meteor.call("addRsvp", rsvpObj);
                var rsvpId = Rsvp.insert(rsvpObj);
                Meteor.call('addGuests', parseFloat(rsvpObj.party));
                console.log(rsvpId);
                swal({
                    title: "Glad you can make it!",
                    text: "Your RSVP has been submitted",
                    imageUrl: "./images/thumbsUp.jpg"
                });
                emailObj = rsvpObj;
                emailObj._id = rsvpId;
                emailObj.subject = "Wedding RSVP Comfirmation: Travis Jette and Rachelle";
                emailObj.message = emailObj.firstName + " - <br><br> Thank you for submitting the RSVP!  This is your official RSVP confirmation. <br><br> If at any time before the wedding you wish to edit or cancel your RSVP, click this link  <a href='https://www.rachelleandtravis.com/editRsvp?id="+ emailObj._id +"'>Change RSVP</a> <br><br> - Travis and Rachelle";
                Meteor.call('sendEmail', emailObj)
                console.log(emailObj);
                FlowRouter.go('/details')
            } else if(isConfirm === true && rsvpObj.attend == "no") {
                Rsvp.insert(rsvpObj);
                // Meteor.call("addRsvp", rsvpObj);
                swal({
                    title: "Sorry You Can't Make The Wedding",
                    text: "Your RSVP has been submitted",
                    imageUrl: "./images/frownyFace.jpg"
                });
                
            } else {
                swal("Cancelled", "Your RSVP has been cancelled", "error");
            }
        });



        // console.log("data", data);

    },

    'change .attending':function(event, template){
        console.log(event.target.value);

        var going= event.target.value;
        if(going === 'yes'){

        Session.set('going', going)
    } else {
        return Session.set('going', false)
        
    }
    }
});

Template.rsvp.onCreated(function () {

    Session.set('going', true);

});

Template.rsvp.onRendered(function(){
    AOS.init();
})