import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stream-banner/dropdown', 'Integration | Component | stream banner/dropdown', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stream-banner/dropdown}}`);

  assert.equal(this.$().text().trim(), 'Change stream');

  // // Template block usage:
  // this.render(hbs`
  //   {{#stream-banner/dropdown}}
  //     template block text
  //   {{/stream-banner/dropdown}}
  // `);
  // 
  // assert.equal(this.$().text().trim(), 'template block text');
});
