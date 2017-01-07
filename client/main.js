Meteor.startup(function(){
    if(Meteor.isClient){
        setInterval(function(){
            Session.set('rightNow', new Date())
        },1000);
        console.log('settings',Meteor.settings.public.stripe)
    }
})