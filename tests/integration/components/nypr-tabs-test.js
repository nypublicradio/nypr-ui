import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-tabs', 'Integration | Component | nypr tabs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-tabs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nypr-tabs}}
      template block text
    {{/nypr-tabs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('each tab renders its own content', function(assert) {

  this.render(hbs`
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

  this.$('.tab1').click();
  assert.equal(this.$('.tabArea1').is(':visible'), true);
  assert.equal(this.$('.tabArea2').is(':visible'), false);

  this.$('.tab2').click();
  assert.equal(this.$('.tabArea1').is(':visible'), false);
  assert.equal(this.$('.tabArea2').is(':visible'), true);

});
