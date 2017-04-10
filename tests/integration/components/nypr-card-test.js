import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-card', 'Integration | Component | nypr card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-card}}`);

  assert.equal(this.$().text().trim(), '');
  assert.notOk(this.$('[data-test-selector=nypr-card-button]').length, "doesn't render a button without a buttonAction or button block");

  // Template block usage:
  this.render(hbs`
    {{#nypr-card}}
      template block text
    {{/nypr-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders a title', function(assert) {
  this.render(hbs`{{nypr-card title="foo"}}`);
  
  assert.ok(/foo/.test(this.$().text().trim()), 'foo should be in there');
});

test('it calls an action passed from the top level', function(assert) {
  function foo() {
    assert.ok('foo was called');
  }
  this.set('foo', foo);
  this.render(hbs`{{nypr-card buttonAction=(action foo)}}`);
  
  this.$('[data-test-selector=nypr-card-button]').click();
});

test('it renders a button which can fire an action', function(assert) {
  assert.expect(2);
  
  this.set('isEditing', false);
  this.render(hbs`
    {{#nypr-card as |card|}}
      {{#card.header as |header|}}
        {{#header.button click=(action (mut isEditing) (not isEditing))}}
          {{if isEditing 'Cancel' 'Edit info'}}
        {{/header.button}}
      {{/card.header}}
    {{/nypr-card}}
  `);
  
  this.$('button').click();
  assert.equal(this.$('button').text().trim(), 'Cancel');
  this.$('button').click();
  assert.equal(this.$('button').text().trim(), 'Edit info');
});
