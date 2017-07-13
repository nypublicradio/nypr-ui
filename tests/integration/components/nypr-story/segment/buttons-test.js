import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-story/segment/buttons', 'Integration | Component | nypr story/segment/buttons', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-story/segment/buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nypr-story/segment/buttons}}
      template block text
    {{/nypr-story/segment/buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
