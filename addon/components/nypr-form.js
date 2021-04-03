import Component from '@ember/component';
import { get, set, getWithDefault } from '@ember/object';
import layout from '../templates/components/nypr-form';

import RSVP from 'rsvp';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    getWithDefault(this, 'allowedKeys', []);
  },

  // pass these in
  changeset: null,
  onSubmit: () => {},
  onFailure: () => {},
  onSuccess: () => {},
  onInvalid: () => {},

  // yields these
  tried: false,
  success: false,
  failure: false,
  invalid: false,
  processing: false,
  actions: {
    submit() {
      set(this, 'tried', true);
      set(this, 'processing', true);
      let changeset = this.changeset;
      let snapshot = changeset.snapshot();
      return changeset.cast(this.allowedKeys)
      .validate()
      .then(() => {
        if(get(changeset, 'isValid')) {
          changeset.execute();
          RSVP.Promise.resolve(this.onSubmit())
          .then(() => {
            set(this, 'success', true);
            this.onSuccess();
            set(this, 'processing', false);
          })
          .catch(e => {
            changeset.restore(snapshot);
            set(this, 'failure', true);
            this.onFailure(e);
            set(this, 'processing', false);
          });
        } else {
          changeset.restore(snapshot);
          set(this, 'invalid', true);
          this.onInvalid();
          set(this, 'processing', false);
        }
      });
    }
  }
});
