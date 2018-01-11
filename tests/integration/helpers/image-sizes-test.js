
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('image-sizes', 'helper:image-sizes', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.render(hbs`{{image-sizes 
    (array 'max-width: 320px' 320)
    (array 'max-width: 480px' 480)
    (array 'max-width: 800px' 800)
  }}`);

  assert.equal(this.$().text().trim(), '(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 800px) 800px');
});
