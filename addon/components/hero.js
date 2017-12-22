import Component from '@ember/component';
import layout from '../templates/components/hero';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import Waypoint from 'waypoints';

export default Component.extend({
  layout,
  classNames: ['nypr-ui__hero'],
  classNameBindings: ['isSticky'],
  attributeBindings: ['style'],
  
  didInsertElement() {
    this._super(...arguments);
    let waypoint = new Waypoint({
      element: this.element,
      handler: direction => {
        this.set('isSticky', direction === 'down');
      },
      offset() {
        return -this.element.clientHeight;
      }
    });
    this.set('waypoint', waypoint);
  },
  
  didRender() {
    Waypoint.refreshAll();
  },
  
  backgroundImage: computed('src', function() {
    let image = this.get('src');
    return htmlSafe(image ? `background-image: url(${image});` : '');
  }),
  
  style: computed('isSticky', function() {
    let height = this.element.clientHeight;
    if (this.get('isSticky')) {
      height = document.querySelector('.nypr-ui__hero > .nypr-ui__hero-body').clientHeight;
      height += 100;
      return htmlSafe(`height: ${height}px;`);
    } else if (height === 0) {
      return null;
    }
  }),
  
  setImage({ src, source, caption }) {
    this.setProperties({ src, source, caption });
  }
});
