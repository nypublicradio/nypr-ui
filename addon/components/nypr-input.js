import Component from 'ember-component';
import layout from '../templates/components/nypr-input';
import { and, or } from 'ember-computed';

export default Component.extend({
  layout,

  classNameBindings: ['hasError'],
  type: 'text',
  entered: false,
  exited: false,
  submitted: false,
  showError: or('exited', 'submitted'),
  showAdvice: and('entered', 'clue'),
  hasError: and('errors', 'showError'),
});
