import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-mini-chrome', 'Integration | Component | nypr mini chrome', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-mini-chrome promo="Promo message"}}`);

  assert.equal(this.$().text().trim(), 'Promo message');

  // Template block usage:
  this.render(hbs`
    {{#nypr-mini-chrome}}
      template block text
    {{/nypr-mini-chrome}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
