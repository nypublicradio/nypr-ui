import Component from '@ember/component';
import layout from '../../templates/components/buttons/red';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['nypr-ui__button-red'],
  classNameBindings: ['tall'],
  attributeBindings: ['disabled', 'href', 'data-category', 'data-action', 'data-label', 'data-value']
});
