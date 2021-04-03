import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-multi-card/panel card', function(hooks) {
  setupRenderingTest(hooks);

  test('it does not render unless active', async function(assert) {
    assert.expect(4);
    this.set('notify', () => assert.ok('notify sent'));
    await render(hbs`{{nypr-multi-card/panel notify=notify}}`);

    assert.notOk(findAll('.nypr-card').length, 'nypr-card should not render');

    // Template block usage:
    await render(hbs`
      {{#nypr-multi-card/panel notify=notify}}
        template block text
      {{/nypr-multi-card/panel}}
    `);

    assert.notOk(findAll('.nypr-card').length, 'nypr-card should not render');
  });

  test('renders an nypr-card if active', async function(assert) {
    this.set('active', true);
    await render(hbs`
      {{#nypr-multi-card/panel active=active as |panel|}}
        {{panel.header title="Hello World"}}
        Welcome
      {{/nypr-multi-card/panel}}
    `);
    
    assert.ok(findAll('.nypr-card').length, 'nypr-card renders');
    assert.ok(findAll('.nypr-card-header').length, 'nypr-card/header renders');
    assert.dom('.nypr-card-header').hasText('Hello World');
    assert.ok(this.element.textContent.match('Welcome'), 'text renders');
  });

  test('fires the setActive action', async function(assert) {
    assert.expect(1);
    this.set('setActive', which => assert.equal(which, 1, 'setActive fired'));
    this.set('active', true);
    await render(hbs`
      {{#nypr-multi-card/panel active=active setActive=setActive to=1 as |panel|}}
        {{panel.button class='test-button' text='click'}}
      {{/nypr-multi-card/panel}}
    `);
    
    await click('.test-button');
  });
});
