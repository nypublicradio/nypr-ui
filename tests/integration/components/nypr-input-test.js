import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{nypr-input}}`);

    assert.dom('.nypr-input').exists({ count: 1 });
  });

  test('it displays a label', async function(assert) {
    let testLabel = '123';
    this.set('label', testLabel);
    await render(hbs`{{nypr-input label=label}}`);

    assert.dom('.nypr-input-label').hasText(testLabel);
  });

  test('it shows error text at the right times', async function(assert) {
    let testErrors = ['bad input'];
    this.set('errors', testErrors);
    await render(hbs`{{nypr-input errors=errors}}`);
    assert.dom('.nypr-input-error').doesNotExist("it should not show error before touched");

    await triggerEvent('.nypr-input', 'focus');
    assert.dom('.nypr-input-error').doesNotExist("it should not show error on focus");

    await triggerEvent('.nypr-input', 'blur');
    assert.dom('.nypr-input-error').exists({ count: 1 }, "it should show error after touched (focusout)");
    assert.dom('.nypr-input-error').hasText(testErrors[0], "it should show the correct error message");
    assert.dom('.nypr-input-container').hasClass('has-error', "it should set the error class");
  });

  test('it shows error when you try to sumbit', async function(assert) {
    let testErrors = ['bad input'];
    this.set('errors', testErrors);
    this.set('submitted', undefined);
    await render(hbs`{{nypr-input errors=errors submitted=submitted}}`);
    assert.dom('.nypr-input-error').doesNotExist("it should not show error before submitted is set");

    this.set('submitted', true);
    assert.dom('.nypr-input-error').exists({ count: 1 }, "it should show error after submitted is set");
    assert.dom('.nypr-input-error').hasText(testErrors[0], "it should show the correct error message");
  });

  test('it shows advice text at the right times', async function(assert) {
    let testClue = 'format: ###';
    this.set('clue', testClue);
    this.set('errors', undefined);
    await render(hbs`{{nypr-input clue=clue errors=errors}}`);
    assert.dom('.nypr-input-advice').doesNotExist("it should not show advice before focus");

    await triggerEvent('.nypr-input', 'focus');
    assert.dom('.nypr-input-advice').exists({ count: 1 }, "it should show advice on focus");
    assert.dom('.nypr-input-advice').hasText(testClue, "it should show the correct advice");

    await triggerEvent('.nypr-input', 'blur');
    assert.dom('.nypr-input-advice').exists({ count: 1 }, "it should keep showing advice after touched (focusout)");

    this.set('errors', ['bad input']);
    assert.dom('.nypr-input-advice').doesNotExist("it should not show advice when it shows an error");
  });

  test('it calls the onChange event', async function(assert) {
    let onChangeCalls = [];
    this.set('changeAction', (e) => {
      onChangeCalls.push(e);
    });

    await render(hbs`{{nypr-input onChange=(action changeAction)}}`);

    await fillIn('.nypr-input', 'abc');
    assert.equal(onChangeCalls.length, 1);
  });


  test('it calls the onInput event', async function(assert) {
    let onInputCalls = [];
    this.set('inputAction', (e) => {
      onInputCalls.push(e);
    });

    await render(hbs`{{nypr-input onInput=(action inputAction)}}`);

    await fillIn('.nypr-input', 'a');
    await fillIn('.nypr-input', 'ab');
    await fillIn('.nypr-input', 'abc');

    assert.equal(onInputCalls.length, 3);
  });
});

