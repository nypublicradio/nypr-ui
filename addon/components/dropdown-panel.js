import { computed } from "@ember/object";
import Component from "@ember/component";
import layout from '../templates/components/dropdown-panel';

export default Component.extend({
  layout,
  classNames: ['dropdown', 'dropdown-fade'],
  classNameBindings: ['directionClass', 'colorClass'],
  directionClass: computed('direction', function() {
    let direction = this.get('direction');
    switch(direction) {
      case 'br':
        return 'dropdown--br';
      case 'tl':
        return 'dropdown--tl';
      default:
        return 'dropdown--bl';
    }
  }),
  colorClass: computed('color', function() {
    let color = this.get('color');
    switch (color) {
      case 'white':
        return 'dropdown--white';
      default:
        return 'dropdown--nearwhite';
    }
  })
});
