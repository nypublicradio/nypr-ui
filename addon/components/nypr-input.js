import Component from 'ember-component';
import layout from '../templates/components/nypr-input';
import { and, or } from 'ember-computed';

export default Component.extend({
  layout,

  classNameBindings: ['hasError'],
  type: 'text',
  focused: false,
  touched: false,
  submitted: false,
  showError: or('focused', 'submitted'),
  hasError: and('errors', 'showError'),
});
