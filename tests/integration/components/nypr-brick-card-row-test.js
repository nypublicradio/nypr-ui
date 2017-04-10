import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-brick-card-row', 'Integration | Component | nypr brick card row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let item1 = {attributes: {title: 'item1'}};
  let item2 = {attributes: {title: 'item2'}};
  let item3 = {attributes: {title: 'item3'}};

  
  this.set('group', [item1, item2, item3]);
  this.set('item1', item1);
  this.set('item2', item2);
  this.set('item3', item3);
  

  this.render(hbs`{{nypr-brick-card-row items=group}}`);

  assert.ok(this.$().text().match('item1'));
  assert.ok(this.$().text().match('item2'));
  assert.ok(this.$().text().match('item3'));


  // Template block usage:
  this.render(hbs`
    {{#nypr-brick-card-row as |layout|}}
      {{layout.brick item=item1}}
      {{layout.brick item=item2}}
      {{layout.brick item=item3}}
    {{/nypr-brick-card-row}}
  `);

  assert.ok(this.$().text().match('item1'));
  assert.ok(this.$().text().match('item2'));
  assert.ok(this.$().text().match('item3'));
});
