import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | site chrome/top', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{site-chrome/top}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#site-chrome/top}}
        template block text
      {{/site-chrome/top}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
