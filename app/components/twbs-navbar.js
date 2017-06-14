import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['navbar', 'navbar-default', 'navbar-fixed-top'],
  tagName: 'nav',
  _clickClosesXsNavbarMenu: Ember.on('didInsertElement', function () {
    Ember.$(document).on('click', '.navbar-collapse.in', function (e) {
      if (Ember.$(e.target).is('a') && ( Ember.$(e.target).attr('class') !== 'dropdown-toggle' )) {
        Ember.$(this).collapse('hide');
      }
    });
  })
});
