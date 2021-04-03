import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr story/header content/buttons', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{nypr-story/header-content/buttons}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#nypr-story/header-content/buttons}}
        template block text
      {{/nypr-story/header-content/buttons}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
