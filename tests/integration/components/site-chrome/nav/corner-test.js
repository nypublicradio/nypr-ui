import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site-chrome/nav/corner', 'Integration | Component | site chrome/nav/corner', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{site-chrome/nav/corner}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#site-chrome/nav/corner}}
      template block text
    {{/site-chrome/nav/corner}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
