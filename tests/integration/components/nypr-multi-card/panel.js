import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-multi-card/panel', 'Integration | Component | nypr-multi-card/panel card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-multi-card/panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nypr-multi-card/panel}}
      template block text
    {{/nypr-multi-card/panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
