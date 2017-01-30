import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-input', 'Integration | Component | nypr input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{nypr-input}}`);

  assert.equal(this.$('.nypr-input').length, 1);
});

test('it displays a label', function(assert) {
  let testLabel = '123';
  this.set('label', testLabel);
  this.render(hbs`{{nypr-input label=label}}`);

  assert.equal(this.$('.nypr-input-label').text().trim(), testLabel);
});

test('it shows error text at the right times', function(assert) {
  let testErrors = ['bad input'];
  this.set('errors', testErrors);
  this.render(hbs`{{nypr-input errors=errors}}`);
  assert.equal(this.$('.nypr-input-error').length, 0, "it should not show error before touched");

  this.$('.nypr-input').trigger('focusin');
  assert.equal(this.$('.nypr-input-error').length, 0, "it should not show error on focus");

  this.$('.nypr-input').trigger('focusout');
  assert.equal(this.$('.nypr-input-error').length, 1, "it should show error after touched (focusout)");
  assert.equal(this.$('.nypr-input-error').text().trim(), testErrors[0], "it should show the correct error message");
  assert.ok(this.$('> div').hasClass('has-error'), "it should set the error class");
});

test('it shows error when you try to sumbit', function(assert) {
  let testErrors = ['bad input'];
  this.set('errors', testErrors);
  this.set('submitted', undefined);
  this.render(hbs`{{nypr-input errors=errors submitted=submitted}}`);
  assert.equal(this.$('.nypr-input-error').length, 0, "it should not show error before submitted is set");

  this.set('submitted', true);
  assert.equal(this.$('.nypr-input-error').length, 1, "it should show error after submitted is set");
  assert.equal(this.$('.nypr-input-error').text().trim(), testErrors[0], "it should show the correct error message");
});

test('it shows advice text at the right times', function(assert) {
  let testClue = 'format: ###';
  this.set('clue', testClue);
  this.set('errors', undefined);
  this.render(hbs`{{nypr-input clue=clue errors=errors}}`);
  assert.equal(this.$('.nypr-input-advice').length, 0, "it should not show advice before focus");

  this.$('.nypr-input').trigger('focusin');
  assert.equal(this.$('.nypr-input-advice').length, 1, "it should show advice on focus");
  assert.equal(this.$('.nypr-input-advice').text().trim(), testClue, "it should show the correct advice");

  this.$('.nypr-input').trigger('focusout');
  assert.equal(this.$('.nypr-input-advice').length, 1, "it should keep showing advice after touched (focusout)");

  this.set('errors', ['bad input']);
  assert.equal(this.$('.nypr-input-advice').length, 0, "it should not show advice when it shows an error");
});

test('it calls the onChange event', function(assert) {
  let onChangeCalls = [];
  this.set('changeAction', (e) => {
    onChangeCalls.push(e);
  });

  this.render(hbs`{{nypr-input onChange=(action changeAction)}}`);

  this.$('.nypr-input').val('abc');
  this.$('.nypr-input').change();

  assert.equal(onChangeCalls.length, 1);
});


test('it calls the onInput event', function(assert) {
  let onInputCalls = [];
  this.set('inputAction', (e) => {
    onInputCalls.push(e);
  });

  this.render(hbs`{{nypr-input onInput=(action inputAction)}}`);

  this.$('.nypr-input').val('a');
  this.$('.nypr-input').trigger('input');
  this.$('.nypr-input').val('ab');
  this.$('.nypr-input').trigger('input');
  this.$('.nypr-input').val('abc');
  this.$('.nypr-input').trigger('input');

  assert.equal(onInputCalls.length, 3);
});

