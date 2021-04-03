import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr brick layout', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('row1', [1,2,3]);
    this.set('row2', [4,5,6]);
    // Template block usage:
    await render(hbs`
      {{#nypr-brick-layout as |layout|}}
        {{layout.blowout items=row1}}
        {{layout.cards items=row2}}
      {{/nypr-brick-layout}}
    `);

    assert.dom('.brick-row--blowout').exists({ count: 1 });
    assert.dom('.brick-row--cards').exists({ count: 1 });
  });

  test('deeper yields', async function(assert) {
    
    this.set('bigItem', {attributes: {title: 'big item'}});
    this.set('blowoutSidebar', {attributes: {title: 'small blowout'}});
    this.set('brick1', {attributes: {title: 'brick 1'}});
    this.set('brick2', {attributes: {title: 'brick 2'}});
    this.set('group', [
      {attributes: {title: 'group1'}},
      {attributes: {title: 'group2'}}
    ]);

    await render(hbs`
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
    
    assert.ok(this.element.textContent.match('big item'), 'blowout items are a parameter');
    assert.ok(this.element.textContent.match('small blowout'), 'small items in blowout are components');
    assert.ok(this.element.textContent.match('in the card'), 'small items in blowout accept a block');
    assert.ok(this.element.textContent.match('brick 1'), 'layout row accepts a parameter');
    assert.ok(this.element.textContent.match('brick 2'), 'layout row accepts a parameter');
    assert.ok(this.element.textContent.match('custom brick'), 'layout row cards accept a block');
    assert.ok(this.element.textContent.match('group1'), 'layout blowout accepts a group');
    assert.ok(this.element.textContent.match('group2'), 'layout blowout accepts a group');
  });
});
