import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-social-icons', 'Integration | Component | nypr social icons', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-social-icons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nypr-social-icons}}
      template block text
    {{/nypr-social-icons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
