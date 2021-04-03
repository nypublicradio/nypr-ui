import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr floating banner', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{nypr-floating-banner}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#nypr-floating-banner}}
        template block text
      {{/nypr-floating-banner}}
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it can be dismissed', async function(assert) {
    await render(hbs`{{nypr-floating-banner}}`);
    await click('.nypr-floating-banner__close');
    
    assert.notOk(findAll('.nypr-floating-banner__wrapper').length);
  });
});
