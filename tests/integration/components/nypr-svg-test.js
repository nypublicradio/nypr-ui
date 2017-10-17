import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-svg', 'Integration | Component | nypr svg', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs` {{nypr-svg icon="search"}}`);
  assert.equal(this.$('path').length, 1);
});
