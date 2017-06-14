import Ember from 'ember';

/**
 * Reset scroll for routes that include this mixin.
 * http://guides.emberjs.com/v1.12.0/cookbook/user_interface_and_interaction/resetting_scroll_on_route_changes/
 */
export default Ember.Mixin.create({
  activate() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});
