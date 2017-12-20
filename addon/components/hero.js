import Component from '@ember/component';
import layout from '../templates/components/hero';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['nypr-ui__hero'],
  attributeBindings: ['style'],
  
  style: computed('src', function() {
    let image = this.get('src');
    return htmlSafe(image ? `background-image: url(${image});` : '');
  }),
  
  setImage(props) {
    this.setProperties(props);
  }
});
