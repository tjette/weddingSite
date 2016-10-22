Template.contact.helpers({

});

Template.contact.events({
"submit .contactForm": function(event, template){
event.preventDefault();
    var formData = $(event.target).serializeArray();

    console.log('formData',formData);

    var contactObj = {};

    _.each(formData, function(e){
        console.log(e);
        contactObj[e.name] = e.value || false;

    })
    console.log(contactObj);
    contactObj.submittedOn = new Date();


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
            swal("Submitted!", "Your Contact Request has been submitted.", "success");
            emailObj=contactObj;

            emailObj.subject = "Contact Request Form: Travis Jette and Rachelle";
            emailObj.message = emailObj.firstName + " - <br><br> Thank you for submitting the Contact Request!  We will respond as quick as possible. Thank You <br><br> - Travis and Rachelle<br><br>" + emailObj.messageArea + "<br>" + emailObj.phone;
            Meteor.call('sendEmail', emailObj)
        } else {
            swal("Cancelled", "Your Contact Request has been cancelled", "error");
        }
    });






}
});