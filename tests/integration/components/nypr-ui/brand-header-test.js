import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-ui/brand-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{nypr-ui/brand-header}}`);
    assert.dom('.nypr-brand-header').exists();
  });

  test('clicking nypr network opens menu', async function(assert) {
    await render(hbs`{{nypr-ui/brand-header}}`);
    await click('.nypr-brand-header-button.mod-network');
    assert.ok(findAll('.nypr-brand-header-menu-items a').length > 5, "menu should be visible");
    await click('.nypr-brand-header-button.mod-network'); // reenable scroll
  });
});
