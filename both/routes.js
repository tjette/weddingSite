FlowRouter.route('/', {
    action: function() {
 BlazeLayout.render('mainLayout', {
     content: 'home'
 });
  }
});

FlowRouter.route('/details', {
    action: function() {
 BlazeLayout.render('mainLayout', {content: 'details'});
  }
});

FlowRouter.route('/registry', {
    action: function() {
 BlazeLayout.render('mainLayout', {content: 'registry'});
  }
});

FlowRouter.route('/contact', {
    action: function() {
 BlazeLayout.render('mainLayout', {content: 'contact'});
  }
});

FlowRouter.route('/rsvp', {
    action: function() {
 BlazeLayout.render('mainLayout', {content: 'rsvp'});
  }
});