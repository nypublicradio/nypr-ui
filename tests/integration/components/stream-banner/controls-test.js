import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stream-banner/controls', 'Integration | Component | stream banner/controls', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stream-banner/controls}}`);

  assert.equal(this.$().text().trim(), 'Listen Live');

  // Template block usage:
  this.render(hbs`
    {{#stream-banner/controls}}
      template block text
    {{/stream-banner/controls}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
