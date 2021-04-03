import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr card/title', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{nypr-card/title}}`);

    assert.dom(this.element).hasText('');
    
    await render(hbs`{{nypr-card/title text="hello world"}}`);
    assert.dom(this.element).hasText('hello world', 'accepts a text param');

    // Template block usage:
    await render(hbs`
      {{#nypr-card/title}}
        template block text
      {{/nypr-card/title}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
