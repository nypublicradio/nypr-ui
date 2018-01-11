
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('image-srcset', 'helper:image-srcset', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.render(hbs`{{image-srcset}}`);

  assert.equal(this.$().text().trim(), '');
});
