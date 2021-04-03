import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr story/header content/message', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{nypr-story/header-content/message}}`);

    assert.dom(this.element).hasText('Audio not yet available');

    // Template block usage:
    await render(hbs`
      {{#nypr-story/header-content/message}}
        template block text
      {{/nypr-story/header-content/message}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
