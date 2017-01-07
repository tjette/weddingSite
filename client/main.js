Meteor.startup(function(){
    if(Meteor.isClient){
        AOS.init()
        setInterval(function(){
            Session.set('rightNow', new Date())
        },1000);

    }
})