import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr brick row blowout', function(hooks) {
  setupRenderingTest(hooks);

  test('blow out variants', async function(assert) {
    let big = {attributes: {title: 'big'}};
    let small1 = {attributes: {title: 'small one'}};
    let small2 = {attributes: {title: 'small two'}};

    
    this.set('group', [big, small1, small2]);
    this.set('bigOne', big);
    this.set('smallOne', small1);
    this.set('otherSmallOne', small2);
    
    await render(hbs`{{nypr-brick-row-blowout items=group}}`);

    assert.ok(this.element.textContent.match('big'));
    assert.ok(this.element.textContent.match('small one'));
    assert.ok(this.element.textContent.match('small two'));

    // Template block usage:
    await render(hbs`
      {{#nypr-brick-row-blowout as |blowout|}}
        {{blowout.main item=bigOne}}
        {{#blowout.column as |column|}}
          {{column.brick item=smallOne}}
          {{column.brick item=otherSmallOne}}
        {{/blowout.column}}
      {{/nypr-brick-row-blowout}}
    `);
    
    assert.ok(this.element.textContent.match('big'));
    assert.ok(this.element.textContent.match('small one'));
    assert.ok(this.element.textContent.match('small two'));
  });
});
