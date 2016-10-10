Template.details.helpers({

});

Template.details.events({
"click .location":function(event,template){
  $(".location").hover(
    function(){
      $(this).css('background-color', "#FF8C00");
    },
    function(){
      $(this).css('background-color', "#fff");
      
  });
}
});

