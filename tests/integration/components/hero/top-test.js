import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-ui/hero/top', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{nypr-ui/hero/top}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#nypr-ui/hero/top}}
        template block text
      {{/nypr-ui/hero/top}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
