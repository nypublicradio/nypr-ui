import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-card', 'Integration | Component | nypr card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-card}}`);

  assert.equal(this.$().text().trim(), '');
  assert.notOk(this.$('[data-test-selector=edit-button]').length, "doesn't render an edit button without an edit attr");

  // Template block usage:
  this.render(hbs`
    {{#nypr-card}}
      template block text
    {{/nypr-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders a title', function(assert) {
  this.render(hbs`{{nypr-card title="foo"}}`);
  
  assert.ok(/foo/.test(this.$().text().trim()), 'foo should be in there');
});

test('it calls the edit action if included', function(assert) {
  function edit() {
    assert.ok('edit was called');
  }
  this.set('edit', edit);
  this.render(hbs`{{nypr-card edit=(action edit)}}`);
  
  this.$('[data-test-selector=edit-button]').click();
});
