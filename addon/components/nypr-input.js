import Component from '@ember/component';
import { computed } from '@ember/object';
import { and, or } from '@ember/object/computed';
import layout from '../templates/components/nypr-input';

export default Component.extend({
  layout,

  classNames: ['nypr-input-container'],
  classNameBindings: ['hasError'],
  type: 'text',
  focused: false,
  blurred: false,
  submitted: false,
  showError: or('blurred', 'submitted'),
  showAdvice: and('focused', 'clue'),
  hasError: and('errors', 'showError'),
  showValidMark: computed('validMark', 'hasError', 'disabled', function() {
    if (!this.get('validMark')) {
      return false;
    }
    return !this.get('hasError') && !this.get('disabled');
  })
});
