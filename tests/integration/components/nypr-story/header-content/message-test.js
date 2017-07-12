import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-story/header-content/message', 'Integration | Component | nypr story/header content/message', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-story/header-content/message}}`);

  assert.equal(this.$().text().trim(), 'Audio not yet available');

  // Template block usage:
  this.render(hbs`
    {{#nypr-story/header-content/message}}
      template block text
    {{/nypr-story/header-content/message}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
