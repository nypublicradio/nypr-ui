import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from 'ember-native-dom-helpers';
import test from 'ember-sinon-qunit/test-support/test';

module('Integration | Component | nypr ui/buttons/red', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{nypr-ui/buttons/red}}`);

    assert.dom('.nypr-ui__button-red').exists();

    // Template block usage:
    await render(hbs`
      {{#nypr-ui/buttons/red}}
        template block text
      {{/nypr-ui/buttons/red}}
    `);

    assert.dom('.nypr-ui__button-red').hasText('template block text');
  });

  test('it fires the click handler', async function() {
    let mock = this.mock('click handler').once().withArgs('foo');
    this.set('click', mock);
    await render(hbs`{{nypr-ui/buttons/red click=(action click 'foo')}}`);
    
    click('.nypr-ui__button-red');
  });
});
