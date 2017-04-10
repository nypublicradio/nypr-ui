import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-brick-layout', 'Integration | Component | nypr brick layout', {
  integration: true
});

test('it renders', function(assert) {

  this.set('row1', [1,2,3]);
  this.set('row2', [4,5,6]);
  // Template block usage:
  this.render(hbs`
    {{#nypr-brick-layout as |layout|}}
      {{layout.blowout items=row1}}
      {{layout.cards items=row2}}
    {{/nypr-brick-layout}}
  `);

  assert.equal(this.$('.brick-row--blowout').length, 1);
  assert.equal(this.$('.brick-row--cards').length, 1);
});

test('deeper yields', function(assert) {
  
  this.set('bigItem', {attributes: {title: 'big item'}});
  this.set('blowoutSidebar', {attributes: {title: 'small blowout'}});
  this.set('brick1', {attributes: {title: 'brick 1'}});
  this.set('brick2', {attributes: {title: 'brick 2'}});
  this.set('group', [
    {attributes: {title: 'group1'}},
    {attributes: {title: 'group2'}}
  ]);

  this.render(hbs`
    {{#nypr-brick-layout as |layout|}}

      {{#layout.blowout as |blowout|}}
        {{blowout.main item=bigItem}}
        {{#blowout.column as |column|}}
          {{column.brick item=blowoutSidebar}}
          {{#column.brick}}
            in the card
          {{/column.brick}}
        {{/blowout.column}}
      {{/layout.blowout}}

      {{#layout.cards as |row|}}
        {{row.brick item=brick1}}
        {{row.brick item=brick2}}
        {{#row.brick}}
          custom brick
        {{/row.brick}}
      {{/layout.cards}}
      
      {{layout.blowout items=group}}

    {{/nypr-brick-layout}}
  `);
  
  assert.ok(this.$().text().match('big item'), 'blowout items are a parameter');
  assert.ok(this.$().text().match('small blowout'), 'small items in blowout are components');
  assert.ok(this.$().text().match('in the card'), 'small items in blowout accept a block');
  assert.ok(this.$().text().match('brick 1'), 'layout row accepts a parameter');
  assert.ok(this.$().text().match('brick 2'), 'layout row accepts a parameter');
  assert.ok(this.$().text().match('custom brick'), 'layout row cards accept a block');
  assert.ok(this.$().text().match('group1'), 'layout blowout accepts a group');
  assert.ok(this.$().text().match('group2'), 'layout blowout accepts a group');
});
