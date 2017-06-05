import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import RSVP from 'rsvp';


moduleForComponent('nypr-form', 'Integration | Component | nypr form', {
  integration: true,
  beforeEach() {
    this.mockChangeSet = {
      cast() {
        return {
          validate() { return RSVP.Promise.resolve({}); }
        };
      },
      execute()  {},
      snapshot()  {},
      restore()   {},
      isValid: true,
    };
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{nypr-form}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#nypr-form}}
      template block text
    {{/nypr-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it succeeds', function(assert) {
  this.set('changeset', this.mockChangeSet);
  let onSubmit = sinon.stub().returns( RSVP.Promise.resolve({}) );
  let onSuccess = sinon.spy();
  let onFailure = sinon.spy();
  let onInvalid = sinon.spy();
  this.set('onSubmit', onSubmit);
  this.set('onSuccess', onSuccess);
  this.set('onFailure', onFailure);
  this.set('onInvalid', onInvalid);

  this.render(hbs`{{#nypr-form
                    changeset=changeset
                    onSubmit=(action onSubmit)
                    onSuccess=(action onSuccess)
                    onFailure=(action onFailure)
                    onInvalid=(action onInvalid)
                    as |form|}}
                    <input type="submit" Value="Submit">
                    <span class='status'
                      data-tried="{{form.status.tried}}"
                      data-success="{{form.status.success}}"
                      data-failure="{{form.status.failure}}"
                      data-invalid="{{form.status.invalid}}"
                      data-processing="{{form.status.processing}}"></span>
                  {{/nypr-form}}`);
  this.$('input').click();

  assert.equal(onSubmit.callCount,  1, 'called onSubmit');
  assert.equal(onSuccess.callCount, 1, 'called onSuccess');
  assert.equal(onFailure.callCount, 0, 'called onFailure');
  assert.equal(onInvalid.callCount, 0, 'called onInvalid');

  let data = this.$('.status').data();
  let formState = Object.keys(data).filter(key => !!data[key]).sort();
  assert.deepEqual(formState, ['tried', 'success'].sort());
});

test('it fails', function(assert) {
  this.set('changeset', this.mockChangeSet);
  let onSubmit = sinon.stub().returns( RSVP.Promise.reject() );
  let onSuccess = sinon.spy();
  let onFailure = sinon.spy();
  let onInvalid = sinon.spy();
  this.set('onSubmit', onSubmit);
  this.set('onSuccess', onSuccess);
  this.set('onFailure', onFailure);
  this.set('onInvalid', onInvalid);

  this.render(hbs`{{#nypr-form
                    changeset=changeset
                    onSubmit=(action onSubmit)
                    onSuccess=(action onSuccess)
                    onFailure=(action onFailure)
                    onInvalid=(action onInvalid)
                    as |form|}}
                    <input type="submit" Value="Submit">
                    <span class='status'
                      data-tried="{{form.status.tried}}"
                      data-success="{{form.status.success}}"
                      data-failure="{{form.status.failure}}"
                      data-invalid="{{form.status.invalid}}"
                      data-processing="{{form.status.processing}}"></span>
                  {{/nypr-form}}`);
  this.$('input').click();

  assert.equal(onSubmit.callCount,  1, 'called onSubmit');
  assert.equal(onSuccess.callCount, 0, 'called onSuccess');
  assert.equal(onFailure.callCount, 1, 'called onFailure');
  assert.equal(onInvalid.callCount, 0, 'called onInvalid');

  let data = this.$('.status').data();
  let formState = Object.keys(data).filter(key => !!data[key]).sort();
  assert.deepEqual(formState, ['tried', 'failure'].sort(), "event order is correct");
});

test('it invalids', function(assert) {
  this.mockChangeSet.isValid = false;
  this.set('changeset', this.mockChangeSet);
  let onSubmit = sinon.stub().returns( RSVP.Promise.resolve({}) );
  let onSuccess = sinon.spy();
  let onFailure = sinon.spy();
  let onInvalid = sinon.spy();
  this.set('onSubmit', onSubmit);
  this.set('onSuccess', onSuccess);
  this.set('onFailure', onFailure);
  this.set('onInvalid', onInvalid);

  this.render(hbs`{{#nypr-form
                    changeset=changeset
                    onSubmit=(action onSubmit)
                    onSuccess=(action onSuccess)
                    onFailure=(action onFailure)
                    onInvalid=(action onInvalid)
                    as |form|}}
                    <input type="submit" Value="Submit">
                    <span class='status'
                      data-tried="{{form.status.tried}}"
                      data-success="{{form.status.success}}"
                      data-failure="{{form.status.failure}}"
                      data-invalid="{{form.status.invalid}}"
                      data-processing="{{form.status.processing}}"></span>
                  {{/nypr-form}}`);
  this.$('input').click();

  assert.equal(onSubmit.callCount,  0, 'called onSubmit');
  assert.equal(onSuccess.callCount, 0, 'called onSuccess');
  assert.equal(onFailure.callCount, 0, 'called onFailure');
  assert.equal(onInvalid.callCount, 1, 'called onInvalid');

  let data = this.$('.status').data();
  let formState = Object.keys(data).filter(key => !!data[key]).sort();
  assert.deepEqual(formState, ['tried', 'invalid'].sort());
});
