import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { clickTrigger } from 'ember-basic-dropdown/test-support/helpers';

module('Integration | Component | dropdown panel', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{dropdown-panel}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    let items = ['foo', 'bar'];
    this.set('items', items);
    await render(hbs`
      {{#dropdown-panel as |panel|}}
        {{#panel.button}}button{{/panel.button}}
        {{#panel.body}}
          {{#each items as |i|}}
            {{i}}
          {{/each}}
        {{/panel.body}}
      {{/dropdown-panel}}
    `);

    assert.dom(this.element).hasText('button');
    clickTrigger();
    assert.ok(/foo/.test(find('.panel').textContent));
    assert.ok(/bar/.test(find('.panel').textContent));
  });
});
