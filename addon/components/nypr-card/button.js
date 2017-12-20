import Component from '@ember/component';
import layout from '../../templates/components/nypr-card/button';

const NyprCardButton = Component.extend({
  layout,
  tagName: 'button',
  classNames: ['nypr-card-button'],
  'data-test-selector': 'nypr-card-button'
});

NyprCardButton.reopen({
  attributeBindings: ['data-test-selector']
});

export default NyprCardButton;
