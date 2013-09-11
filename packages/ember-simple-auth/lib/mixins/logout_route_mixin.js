Ember.SimpleAuth.LogoutRouteMixin = Ember.Mixin.create({
  beforeModel: function() {
    var self = this;
    Ember.$.ajax({
      url:  Ember.SimpleAuth.baseUrl + '/session',
      type: 'DELETE'
    }).always(function(response) {
      self.get('session').logout();
      self.transitionToRoute(Ember.SimpleAuth.routeAfterLogout);
    });
  }
});
