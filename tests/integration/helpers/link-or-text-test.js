
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('helper:link-or-text', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders link', async function(assert) {
    let name = 'link';
    let url = 'http://example.com';
    this.set('inputValue', {name, url});

    await render(hbs`{{{link-or-text inputValue}}}`);

    assert.dom('a').exists({ count: 1 });
    assert.dom('a').hasText(name);
    assert.dom('a').hasAttribute('href', url);
  });

  test('it renders text', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{link-or-text inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });
});
