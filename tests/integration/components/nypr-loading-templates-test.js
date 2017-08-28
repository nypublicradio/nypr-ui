import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-loading-templates', 'Integration | Component | nypr loading templates', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('type', 'index');
  this.render(hbs`{{nypr-loading-templates type=type}}`);

  assert.equal(this.$().text().trim(), '');
});
