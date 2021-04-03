import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{nypr-card}}`);

    assert.dom(this.element).hasText('');
    assert.notOk(findAll('[data-test-selector=nypr-card-button]').length, "doesn't render a button without a buttonAction or button block");

    // Template block usage:
    await render(hbs`
      {{#nypr-card}}
        template block text
      {{/nypr-card}}
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it renders a title', async function(assert) {
    await render(hbs`{{nypr-card title="foo"}}`);
    
    assert.ok(/foo/.test(this.element.textContent.trim()), 'foo should be in there');
  });

  test('it calls an action passed from the top level', async function(assert) {
    function foo() {
      assert.ok('foo was called');
    }
    this.set('foo', foo);
    await render(hbs`{{nypr-card buttonAction=(action foo)}}`);
    
    await click('[data-test-selector=nypr-card-button]');
  });

  test('it renders a button which can fire an action', async function(assert) {
    assert.expect(2);
    
    this.set('isEditing', false);
    await render(hbs`
      {{#nypr-card as |card|}}
        {{#card.header as |header|}}
          {{#header.button click=(action (mut isEditing) (not isEditing))}}
            {{if isEditing 'Cancel' 'Edit info'}}
          {{/header.button}}
        {{/card.header}}
      {{/nypr-card}}
    `);
    
    await click('button');
    assert.dom('button').hasText('Cancel');
    await click('button');
    assert.dom('button').hasText('Edit info');
  });
});
