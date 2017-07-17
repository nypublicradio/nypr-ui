import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stream-banner/station-name', 'Integration | Component | stream banner/station name', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('activeStream', {name: 'foo'});
  this.render(hbs`{{stream-banner/station-name activeStream=activeStream}}`);

  assert.equal(this.$().text().trim(), 'foo');

  // // Template block usage:
  // this.render(hbs`
  //   {{#stream-banner/station-name}}
  //     template block text
  //   {{/stream-banner/station-name}}
  // `);
  // 
  // assert.equal(this.$().text().trim(), 'template block text');
});
