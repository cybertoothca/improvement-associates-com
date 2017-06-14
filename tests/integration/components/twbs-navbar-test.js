import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-navbar', 'Integration | Component | twbs navbar', {
  integration: true
});

test('four menu items are present', function (assert) {
  this.render(hbs`{{twbs-navbar}}`);

  assert.equal(this.$('.navbar-nav.navbar-right a').length, 4);
});
