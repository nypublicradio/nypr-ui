import Component from '@ember/component';
import layout from '../../templates/components/support-stripe/link';

const Link = Component.extend({
  layout,
  tagName: 'a',
  classNames: ['support-stripe__link'],
  attributeBindings: ['href', 'target'],
  target: '_blank',
});

Link.reopenClass({
  positionalParams: ['text', 'href']
});

export default Link;
