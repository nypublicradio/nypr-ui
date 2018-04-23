import Component from '@ember/component';
import layout from '../templates/components/support-stripe';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'a',
  classNames: ['support-stripe'],
  classNameBindings: ['theme'],
  attributeBindings: ['href', 'target', 'data-action', 'data-label'],
  href: '',
  target: '_blank',

  image: computed('background', function() {
    let bg = this.background;
    if (bg) {
      return htmlSafe(`background-image: url(${bg});`);
    }
  })
});
