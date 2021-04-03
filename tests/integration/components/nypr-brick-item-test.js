import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr brick item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('item', {attributes: {title: 'foo'}});
    await render(hbs`{{nypr-brick-item item=item}}`);

    assert.ok(this.element.textContent.match('foo'));
    
    await render(hbs`
      {{#nypr-brick-item}}
        ahoy
      {{/nypr-brick-item}}
    `);
    
    assert.ok(this.element.textContent.match('ahoy'));
  });
});
