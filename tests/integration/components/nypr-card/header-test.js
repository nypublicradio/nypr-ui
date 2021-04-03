import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr card/header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    assert.expect(4);
    this.set('buttonAction', () => assert.ok('buttonAction fired'));
    await render(hbs`{{nypr-card/header title="hello world" buttonAction=buttonAction}}`);

    assert.dom(this.element).hasText('hello world');
    await click('[data-test-selector="nypr-card-button"]');

    // Template block usage:
    await render(hbs`
      {{#nypr-card/header as |header|}}
        {{header.title text="hello world"}}
        {{header.button text="the button"}}
      {{/nypr-card/header}}
    `);

    assert.dom('.nypr-card-title').hasText('hello world');
    assert.dom('.nypr-card-button').hasText('the button');
  });
});
