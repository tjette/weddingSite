FlowRouter.route('/', {
    action: function() {
 BlazeLayout.render('home', {content: 'home'});   
  }
});

FlowRouter.route('/details', {
    action: function() {
 BlazeLayout.render('details', {content: 'details'});   
  }
});

FlowRouter.route('/registry', {
    action: function() {
 BlazeLayout.render('registry', {content: 'registry'});   
  }
});

FlowRouter.route('/contact', {
    action: function() {
 BlazeLayout.render('contact', {content: 'contact'});   
  }
});