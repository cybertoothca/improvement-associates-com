import Ember from 'ember';
import RoutesScollToTopMixin from 'ia/mixins/routes/scoll-to-top';
import { module, test } from 'qunit';

module('Unit | Mixin | routes/scoll to top');

// Replace this with your real tests.
test('it works', function (assert) {
  let RoutesScollToTopObject = Ember.Object.extend(RoutesScollToTopMixin);
  let subject = RoutesScollToTopObject.create();
  assert.ok(subject);
});
