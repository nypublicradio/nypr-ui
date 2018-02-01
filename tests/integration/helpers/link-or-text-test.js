
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-or-text', 'helper:link-or-text', {
  integration: true
});

test('it renders link', function(assert) {
  let name = 'link';
  let url = 'http://example.com';
  this.set('inputValue', {name, url});

  this.render(hbs`{{{link-or-text inputValue}}}`);

  assert.equal(this.$('a').length, 1);
  assert.equal(this.$('a').text(), name);
  assert.equal(this.$('a').attr('href'), url);
});

test('it renders text', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{link-or-text inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
