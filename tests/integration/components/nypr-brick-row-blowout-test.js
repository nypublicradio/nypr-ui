import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-brick-row-blowout', 'Integration | Component | nypr brick row blowout', {
  integration: true
});

test('blow out variants', function(assert) {
  let big = {attributes: {title: 'big'}};
  let small1 = {attributes: {title: 'small one'}};
  let small2 = {attributes: {title: 'small two'}};

  
  this.set('group', [big, small1, small2]);
  this.set('bigOne', big);
  this.set('smallOne', small1);
  this.set('otherSmallOne', small2);
  
  this.render(hbs`{{nypr-brick-row-blowout items=group}}`);

  assert.ok(this.$().text().match('big'));
  assert.ok(this.$().text().match('small one'));
  assert.ok(this.$().text().match('small two'));

  // Template block usage:
  this.render(hbs`
    {{#nypr-brick-row-blowout as |blowout|}}
      {{blowout.main item=bigOne}}
      {{#blowout.column as |column|}}
        {{column.item item=smallOne}}
        {{column.item item=otherSmallOne}}
      {{/blowout.column}}
    {{/nypr-brick-row-blowout}}
  `);
  
  assert.ok(this.$().text().match('big'));
  assert.ok(this.$().text().match('small one'));
  assert.ok(this.$().text().match('small two'));
});
