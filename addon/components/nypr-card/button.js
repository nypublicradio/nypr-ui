import Component from '@ember/component';
import layout from '../../templates/components/nypr-card/button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['nypr-card-button'],
  attributeBindings: ['data-category', 'data-action', 'data-label', 'data-value', 'data-test-selector'],
  'data-test-selector': 'nypr-card-button'
});
