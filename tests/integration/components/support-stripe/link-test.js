import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | support-stripe/link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{nypr-ui/support-stripe/link 'text' 'foo.com'}}`);

    assert.ok(find('.support-stripe__link'));
    assert.equal(find('.support-stripe__link').textContent.trim(), 'text');
    assert.equal(find('.support-stripe__link').getAttribute('href'), 'foo.com');
  });
});
