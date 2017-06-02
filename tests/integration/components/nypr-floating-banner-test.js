import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-floating-banner', 'Integration | Component | nypr floating banner', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-floating-banner}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nypr-floating-banner}}
      template block text
    {{/nypr-floating-banner}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it can be dismissed', function(assert) {
  this.render(hbs`{{nypr-floating-banner}}`);
  this.$('.nypr-floating-banner__close').click();
  
  assert.notOk(this.$('.nypr-floating-banner__wrapper').length);
});
