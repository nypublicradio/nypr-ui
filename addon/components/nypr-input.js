import Component from 'ember-component';
import layout from '../templates/components/nypr-input';
import computed, { and, or } from 'ember-computed';

export default Component.extend({
  layout,

  classNames: ['nypr-input-container'],
  classNameBindings: ['hasError'],
  type: 'text',
  entered: false,
  exited: false,
  submitted: false,
  showError: or('exited', 'submitted'),
  showAdvice: and('entered', 'clue'),
  hasError: and('errors', 'showError'),
  showValidMark: computed('validMark', 'hasError', 'disabled', function() {
    if (!this.get('validMark')) {
      return false;
    }
    return !this.get('hasError') && !this.get('disabled');
  })
});
