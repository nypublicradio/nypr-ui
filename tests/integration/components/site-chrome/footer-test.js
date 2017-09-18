import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site-chrome/footer', 'Integration | Component | site chrome/footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{site-chrome/footer}}`);

  assert.equal(this.$().text().trim(), 'Document Footer');

  // Template block usage:
  this.render(hbs`
    {{#site-chrome/footer}}
      template block text
    {{/site-chrome/footer}}
  `);

  assert.ok(this.$().text().match('template block text'));
});
