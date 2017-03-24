import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stream-banner', 'Integration | Component | stream banner', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{stream-banner}}`);
  assert.equal(this.$('.streambanner-on-air').text().trim(), 'On air now on', 'it should render');
});

skip('it renders a dropdown of the given stream options');

skip('it yields the activeStream');

skip('takes a background image');
