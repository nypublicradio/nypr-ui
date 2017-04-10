import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-card/title', 'Integration | Component | nypr card/title', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-card/title}}`);

  assert.equal(this.$().text().trim(), '');
  
  this.render(hbs`{{nypr-card/title text="hello world"}}`);
  assert.equal(this.$().text().trim(), 'hello world', 'accepts a text param');

  // Template block usage:
  this.render(hbs`
    {{#nypr-card/title}}
      template block text
    {{/nypr-card/title}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
