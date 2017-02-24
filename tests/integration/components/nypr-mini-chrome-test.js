import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-mini-chrome', 'Integration | Component | nypr mini chrome', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-mini-chrome}}`);

  assert.equal(this.$().text().trim(), 'Tune in Monday−Thursday at 8 p.m. ET');

});
