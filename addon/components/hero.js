import Component from '@ember/component';
import layout from '../templates/components/hero';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import StickyHeader from '../mixins/sticky-header';

export default Component.extend(StickyHeader, {
  layout,
  classNames: ['nypr-ui__hero'],
  attributeBindings: ['style'],
  classNameBindings: ['gradient:with-gradient'],
  
  style: computed('src', function() {
    let image = this.get('src');
    return htmlSafe(image ? `background-image: url(${image});` : '');
  }),
  
  setImage({ src, source, caption, credit }) {
    this.setProperties({ src, source, caption, credit });
  },
  
  offset() {
    return -this.element.clientHeight + 100;
  }
});
