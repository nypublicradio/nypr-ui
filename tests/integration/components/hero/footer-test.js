import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-ui/hero/footer', 'Integration | Component | nypr ui/hero/footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-ui/hero/footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nypr-ui/hero/footer}}
      template block text
    {{/nypr-ui/hero/footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
