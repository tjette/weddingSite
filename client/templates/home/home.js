Template.home.helpers({
    tillWedding: function() {

        var weddingDate = new Date("07/29/2017 15:00");

        var currentDate = new Date(moment(Session.get('rightNow')).format());
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var distance = weddingDate - currentDate;
        if (distance < 0) {
            return false
        } else {
            var days = Math.floor(distance / day) + " days ";
            var hours = Math.floor((distance % day) / hour) + " hours ";
            var minutes = Math.floor((distance % hour) / minute) + " minutes ";
            var seconds = Math.floor((distance % minute) / second) + " seconds until the wedding! ";
            return days + hours + minutes + seconds;

        }

    },
    days: function() {

        var weddingDate = new Date("07/29/2017 15:00");

        var currentDate = new Date(moment(Session.get('rightNow')).format());
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var distance = weddingDate - currentDate;
        if (distance < 0) {
            return false
        } else {
            var days = Math.floor(distance / day)
            var hours = Math.floor((distance % day) / hour) + " hours ";
            var minutes = Math.floor((distance % hour) / minute) + " minutes ";
            var seconds = Math.floor((distance % minute) / second) + " seconds until the wedding! ";
            return days

        }

    },
    hours: function() {

        var weddingDate = new Date("07/29/2017 15:00");

        var currentDate = new Date(moment(Session.get('rightNow')).format());
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var distance = weddingDate - currentDate;
        if (distance < 0) {
            return false
        } else {
            var days = Math.floor(distance / day)
            var hours = Math.floor((distance % day) / hour);
            var minutes = Math.floor((distance % hour) / minute) + " minutes ";
            var seconds = Math.floor((distance % minute) / second) + " seconds until the wedding! ";
            return hours

        }

    },
    minutes: function() {

        var weddingDate = new Date("07/29/2017 15:00");

        var currentDate = new Date(moment(Session.get('rightNow')).format());
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var distance = weddingDate - currentDate;
        if (distance < 0) {
            return false
        } else {
            var days = Math.floor(distance / day)
            var hours = Math.floor((distance % day) / hour);
            var minutes = Math.floor((distance % hour) / minute) ;
            var seconds = Math.floor((distance % minute) / second) + " seconds until the wedding! ";
            return minutes

        }

    },
    seconds: function() {

        var weddingDate = new Date("07/29/2017 15:00");

        var currentDate = new Date(moment(Session.get('rightNow')).format());
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var distance = weddingDate - currentDate;
        if (distance < 0) {
            return false
        } else {
            var days = Math.floor(distance / day)
            var hours = Math.floor((distance % day) / hour);
            var minutes = Math.floor((distance % hour) / minute) ;
            var seconds = Math.floor((distance % minute) / second);
            return seconds

        }

    }
});

Template.home.events({

});

Template.home.onRendered(function(){
AOS.init();

    
});