import { moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, click } from 'ember-native-dom-helpers';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('nypr-ui/buttons/red', 'Integration | Component | nypr ui/buttons/red', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{nypr-ui/buttons/red}}`);

  assert.ok(find('.nypr-ui__button-red'));

  // Template block usage:
  this.render(hbs`
    {{#nypr-ui/buttons/red}}
      template block text
    {{/nypr-ui/buttons/red}}
  `);

  assert.equal(find('.nypr-ui__button-red').textContent.trim(), 'template block text');
});

test('it fires the click handler', function() {
  let mock = this.mock('click handler').once().withArgs('foo');
  this.set('click', mock);
  this.render(hbs`{{nypr-ui/buttons/red click=(action click 'foo')}}`);
  
  click('.nypr-ui__button-red');
});
