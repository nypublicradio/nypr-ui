import Component from '@ember/component';
import layout from '../templates/components/hero';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import { bind } from '@ember/runloop';
import StickyHeader from '../mixins/sticky-header';

export default Component.extend(StickyHeader, {
  layout,
  classNames: ['nypr-ui__hero'],
  attributeBindings: ['style'],
  classNameBindings: ['gradient:with-gradient'],
  breakpoint: '(min-width: 801px)',
  
  init() {
    this._super(...arguments);
    let breakpoint = this.get('breakpoint');
    if (window.matchMedia &&  breakpoint) {
      let mql = window.matchMedia(breakpoint);
      this.set('mql', mql);
      this.set('boundListener', bind(this, 'toggleImage'));
      mql.addListener(this.get('boundListener'));
      
      this.toggleImage(mql);
    }
  },
  
  willDestroyElement() {
    this._super(...arguments);
    this.get('mql').removeListener(this.get('boundListener'));
  },
  
  toggleImage({ matches }) {
    this.set('useBackgroundImage', matches);
  },
  
  style: computed('src', 'useBackgroundImage', function() {
    if (this.get('useBackgroundImage'))  {
      let image = this.get('src');
      return htmlSafe(image ? `background-image: url(${image});` : '');
    } else {
      return htmlSafe('');
    }
  }),
  
  setImage({ src, source, caption, credit }) {
    this.setProperties({ src, source, caption, credit });
  },
  
  offset() {
    return -this.element.clientHeight + 155;
  }
});
