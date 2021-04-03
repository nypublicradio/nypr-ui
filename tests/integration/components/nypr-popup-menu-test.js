import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr popup menu', function(hooks) {
  setupRenderingTest(hooks);

  let isOpen = function(context, selectorPrefix = '') {
    let selector = selectorPrefix + '.nypr-popupmenu';
    return context.$(selector).hasClass('is-open');
  };

  let isClosed = function(context, selectorPrefix) {
    return !isOpen(context, selectorPrefix);
  };

  test('it renders', async function(assert) {
    await render(hbs`
      {{#nypr-popup-menu text='Text'}}
        <div class='find-me'></div>
      {{/nypr-popup-menu}}
    `);
    assert.dom('.nypr-popupmenu-button').hasText('Text', 'button text should render');
    assert.dom('.find-me').exists({ count: 1 }, 'block contents should render');
  });

  test('it toggles the popup when you click the button', async function(assert) {
    assert.expect(3);
    await render(hbs`{{nypr-popup-menu}}`);
    assert.ok(isClosed(this), 'popup should begin closed');
    this.$('.nypr-popupmenu-button')[0].click();

    settled().then(() => {
      assert.ok(isOpen(this), 'popup should open after clicking the button');
      this.$('.nypr-popupmenu-button')[0].click();
    });

    return settled().then(() => {
      assert.ok(isClosed(this), 'popup should close after clicking the button again');
    });
  });

  test('it closes the popup when you click outside', async function(assert) {
    assert.expect(1);
    await render(hbs`{{nypr-popup-menu}} <div id="outside">outside</div>`);
    this.$('.nypr-popupmenu-button')[0].click();

    settled().then(() => {
      this.$('#outside')[0].click();
    });

    return settled().then(() => {
      assert.ok(isClosed(this), 'popup should close after clicking outside');
    });
  });

  test('it closes the popup when you send a close action', async function(assert) {
    assert.expect(1);
    await render(
      hbs`{{#nypr-popup-menu as |close|}} <button id="close" {{action close}}>close</button> {{/nypr-popup-menu}}`
    );
    this.$('.nypr-popupmenu-button')[0].click();

    settled().then(() => {
      this.$('#close')[0].click();
    });

    return settled().then(() => {
      assert.ok(isClosed(this), 'popup should close after clicking button with close action');
    });
  });

  test('it does not close the popup when you click on the bubble', async function(assert) {
    assert.expect(1);
    await render(hbs`{{nypr-popup-menu}}`);
    this.$('.nypr-popupmenu-button')[0].click();

    settled().then(() => {
      this.$('.nypr-popupmenu-popup')[0].click();
    });

    return settled().then(() => {
      assert.ok(isOpen(this), 'popup should remain open after clicking bubble');
    });
  });

  test('it works correctly with two buttons', async function(assert) {
    assert.expect(6);
    await render(hbs`
      {{#nypr-popup-menu class="b1" text="1"}}{{/nypr-popup-menu}}
      {{#nypr-popup-menu class="b2" text="2"}}{{/nypr-popup-menu}}
    `);
    assert.ok(isClosed(this, '.b1'), 'popup 1 should begin closed');
    assert.ok(isClosed(this, '.b2'), 'popup 2 should begin closed');

    this.$('.b1 .nypr-popupmenu-button')[0].click();

    settled().then(() => {
      assert.ok(isOpen(this, '.b1'), 'popup 1 should open after clicking button 1');
      assert.ok(isClosed(this, '.b2'), 'popup 2 should remain closed after clicking button 1');
      this.$('.b2 .nypr-popupmenu-button')[0].click();
    });

    return settled().then(() => {
      assert.ok(isClosed(this, '.b1'), 'popup 1 should close after clicking button 2');
      assert.ok(isOpen(this, '.b2'), 'popup 2 should open after clicking button 2');
    });

  });
});
