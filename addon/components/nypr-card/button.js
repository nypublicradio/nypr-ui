import Ember from 'ember';
import layout from '../../templates/components/nypr-card/button';

const NyprCardButton = Ember.Component.extend({
  layout,
  tagName: 'button',
  classNames: ['nypr-card-button'],
  'data-test-selector': 'nypr-card-button'
});

NyprCardButton.reopen({
  attributeBindings: ['data-test-selector']
});

export default NyprCardButton;
