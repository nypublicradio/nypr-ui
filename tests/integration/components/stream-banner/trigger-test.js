import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stream-banner/trigger', 'Integration | Component | stream banner/trigger', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stream-banner/trigger}}`);

  assert.equal(this.$('.stream-banner__trigger-label').text().trim(), "Change stream", 'The change stream trigger should display');
});
