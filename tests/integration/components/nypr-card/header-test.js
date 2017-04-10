import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-card/header', 'Integration | Component | nypr card/header', {
  integration: true
});

test('it renders', function(assert) {

  assert.expect(4);
  this.set('buttonAction', () => assert.ok('buttonAction fired'));
  this.render(hbs`{{nypr-card/header title="hello world" buttonAction=buttonAction}}`);

  assert.equal(this.$().text().trim(), 'hello world');
  this.$('[data-test-selector="nypr-card-button"]').click();

  // Template block usage:
  this.render(hbs`
    {{#nypr-card/header as |header|}}
      {{header.title text="hello world"}}
      {{header.button text="the button"}}
    {{/nypr-card/header}}
  `);

  assert.equal(this.$('.nypr-card-title').text().trim(), 'hello world');
  assert.equal(this.$('.nypr-card-button').text().trim(), 'the button');
});
