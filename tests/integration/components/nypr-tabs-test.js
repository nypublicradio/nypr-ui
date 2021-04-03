import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr tabs', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{nypr-tabs}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#nypr-tabs}}
        template block text
      {{/nypr-tabs}}
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('each tab renders its own content', async function(assert) {

    await render(hbs`
      {{#nypr-tabs selection=selection as |tabs|}}
      {{#tabs.tablist as |tablist|}}
        {{#tablist.tab "TabA" classNames="tab1" on-select=(action (mut selection))}}Tab A{{/tablist.tab}}
        {{#tablist.tab "TabB" classNames="tab2" on-select=(action (mut selection))}}Tab B{{/tablist.tab}}
      {{/tabs.tablist}}

      {{#tabs.tabpanel "TabA" classNames="tabArea1"}}
        <p>Tab A area</p>
      {{/tabs.tabpanel}}

      {{#tabs.tabpanel "TabB" classNames="tabArea2"}}
        <p>Tab B area</p>
      {{/tabs.tabpanel}}

      {{/nypr-tabs}}
    `);

    await click('.tab1');
    assert.equal(this.$('.tabArea1').is(':visible'), true);
    assert.equal(this.$('.tabArea2').is(':visible'), false);

    await click('.tab2');
    assert.equal(this.$('.tabArea1').is(':visible'), false);
    assert.equal(this.$('.tabArea2').is(':visible'), true);

  });
});
