import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-brick-card-grid', 'Integration | Component | nypr brick card grid', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-brick-card-grid}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nypr-brick-card-grid}}
      template block text
    {{/nypr-brick-card-grid}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
