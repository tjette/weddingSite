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

FlowRouter.route('/stripe', {
    action: function() {
 BlazeLayout.render('mainLayout', {content: 'stripe'});
  }
});

FlowRouter.route('/photos', {
    action: function() {
 BlazeLayout.render('mainLayout', {content: 'photos'});
  }
});

FlowRouter.route('/editRsvp',{
  action: function(params,queryParams) {
    Session.set('params', queryParams)
      BlazeLayout.render('mainLayout', {content: 'editRsvp'});
  }
});

FlowRouter.route('/admin', {
    action: function() {
        BlazeLayout.render('mainLayout', {content: 'admin'});
    }
});