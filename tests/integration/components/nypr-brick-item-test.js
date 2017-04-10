import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-brick-item', 'Integration | Component | nypr brick item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('item', {attributes: {title: 'foo'}});
  this.render(hbs`{{nypr-brick-item item=item}}`);

  assert.ok(this.$().text().match('foo'));
  
  this.render(hbs`
    {{#nypr-brick-item}}
      ahoy
    {{/nypr-brick-item}}
  `);
  
  assert.ok(this.$().text().match('ahoy'));
});
