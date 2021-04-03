
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('helper:image-sizes', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    await render(hbs`{{image-sizes 
      (array 'max-width: 320px' 320)
      (array 'max-width: 480px' 480)
      (array 'max-width: 800px' 800)
    }}`);

    assert.dom(this.element).hasText(
      '(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 800px) 800px'
    );
  });
});
