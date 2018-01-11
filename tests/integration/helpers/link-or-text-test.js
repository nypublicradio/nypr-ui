
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-or-text', 'helper:link-or-text', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{link-or-text inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

