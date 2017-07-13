import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { clickTrigger } from 'dummy/tests/helpers/ember-basic-dropdown';

moduleForComponent('dropdown-panel', 'Integration | Component | dropdown panel', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dropdown-panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  let items = ['foo', 'bar'];
  this.set('items', items);
  this.render(hbs`
    {{#dropdown-panel text="button" items=items as |i|}}
      {{i}}
    {{/dropdown-panel}}
  `);

  assert.equal(this.$().text().trim(), 'button');
  clickTrigger();
  assert.ok(/foo/.test(this.$('.panel').text()));
  assert.ok(/bar/.test(this.$('.panel').text()));
});
