import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-share-button/button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{nypr-share-button/button type='Email'}}`);

    assert.ok(this.element.querySelector('a'), 'renders an anchor tag for email type');

    await render(hbs`{{nypr-share-button/button}}`);

    assert.ok(this.element.querySelector('button'), 'renders a button otherwise');
  });
});
