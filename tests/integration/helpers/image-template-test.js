import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | image-template', function(hooks) {
  setupRenderingTest(hooks);

  test('if no quality is supplied it requests 85', async function(assert) {
    this.set('templateUrl', "https://media.wnyc.org/i/%s/%s/%s/%s/photologue/photos/photo-name.jpg");
    await render(hbs`{{image-template templateUrl 400 400 'l'}}`);
    assert.equal(this.element.textContent.trim(), 'https://media.wnyc.org/i/400/400/l/85/photologue/photos/photo-name.jpg');
  });

  test('it accepts width and height parameters', async function(assert) {
    this.set('templateUrl', "https://media.wnyc.org/i/%s/%s/%s/%s/photologue/photos/photo-name.jpg");
    await render(hbs`{{image-template templateUrl 440 420 'l'}}`);
    assert.equal(this.element.textContent.trim(), 'https://media.wnyc.org/i/440/420/l/85/photologue/photos/photo-name.jpg');
  });

  test('it accepts a quality parameter', async function(assert) {
    this.set('templateUrl', "https://media.wnyc.org/i/%s/%s/%s/%s/photologue/photos/photo-name.jpg");
    await render(hbs`{{image-template templateUrl 400 400 'l' 75}}`);
    assert.equal(this.element.textContent.trim(), 'https://media.wnyc.org/i/400/400/l/75/photologue/photos/photo-name.jpg');
  });
});
