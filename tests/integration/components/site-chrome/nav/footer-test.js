import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site-chrome/nav/footer', 'Integration | Component | site chrome/nav/footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{site-chrome/nav/footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#site-chrome/nav/footer}}
      template block text
    {{/site-chrome/nav/footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
