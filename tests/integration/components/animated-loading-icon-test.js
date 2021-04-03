import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | animated loading icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{animated-loading-icon}}`);
    assert.dom('canvas').exists({ count: 1 });
  });

  test('it sets the width and height on the canvas element', async function(assert) {
    this.set('height', 100);
    this.set('width', 100);

    await render(hbs`{{animated-loading-icon width=width height=height}}`);
    assert.dom('canvas').hasAttribute('width', '100');
    assert.dom('canvas').hasAttribute('height', '100');
  });
});
