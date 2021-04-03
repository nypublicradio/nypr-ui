import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | site chrome/footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{site-chrome/footer}}`);

    assert.dom(this.element).hasText('Document Footer');

    // Template block usage:
    await render(hbs`
      {{#site-chrome/footer}}
        template block text
      {{/site-chrome/footer}}
    `);

    assert.ok(this.element.textContent.match('template block text'));
  });
});
