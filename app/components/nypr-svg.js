import Component from 'ember-component';
import computed from 'ember-computed';

export default Component.extend({
  tagName: '',
  svgPartial: computed(function() {
    let icon = this.get('icon');
    return icon ? `components/nypr-svg/${icon}` : false;
  })
});
