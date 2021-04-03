import Component from '@ember/component';
import { computed } from '@ember/object';
import { and, or } from '@ember/object/computed';
import layout from '../templates/components/nypr-input';

export default Component.extend({
  layout,

  classNames: ['nypr-input-container'],
  classNameBindings: ['hasError'],
  attributeBindings: ['data-action', 'data-label', 'data-category', 'data-value'],

  // attrs.
  type: 'text',
  focused: false,
  blurred: false,
  submitted: false,
  errors: null,
  clue: null,
  onChange: null,
  onInput: null,

  showError: or('blurred', 'submitted'),
  showAdvice: and('focused', 'clue'),
  hasError: and('errors', 'showError'),
  showValidMark: computed('validMark', 'hasError', 'disabled', function() {
    if (!this.validMark) {
      return false;
    }
    return !this.hasError && !this.disabled;
  })
});
