import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-multi-card/panel', 'Integration | Component | nypr-multi-card/panel card', {
  integration: true
});

test('it does not render unless active', function(assert) {
  assert.expect(4);
  this.set('notify', () => assert.ok('notify sent'));
  this.render(hbs`{{nypr-multi-card/panel notify=notify}}`);

  assert.notOk(this.$('.nypr-card').length, 'nypr-card should not render');

  // Template block usage:
  this.render(hbs`
    {{#nypr-multi-card/panel notify=notify}}
      template block text
    {{/nypr-multi-card/panel}}
  `);

  assert.notOk(this.$('.nypr-card').length, 'nypr-card should not render');
});

test('renders an nypr-card if active', function(assert) {
  this.set('active', true);
  this.render(hbs`
    {{#nypr-multi-card/panel active=active as |panel|}}
      {{panel.header title="Hello World"}}
      Welcome
    {{/nypr-multi-card/panel}}
  `);
  
  assert.ok(this.$('.nypr-card').length, 'nypr-card renders');
  assert.ok(this.$('.nypr-card-header').length, 'nypr-card/header renders');
  assert.equal(this.$('.nypr-card-header').text().trim(), 'Hello World');
  assert.ok(this.$().text().match('Welcome'), 'text renders');
});

test('fires the setActive action', function(assert) {
  assert.expect(1);
  this.set('setActive', which => assert.equal(which, 1, 'setActive fired'));
  this.set('active', true);
  this.render(hbs`
    {{#nypr-multi-card/panel active=active setActive=setActive to=1 as |panel|}}
      {{panel.button class='test-button' text='click'}}
    {{/nypr-multi-card/panel}}
  `);
  
  this.$('.test-button').click();
});
