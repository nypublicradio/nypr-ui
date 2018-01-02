import Component from '@ember/component';
import layout from '../../templates/components/hero/headline';
import Waypoint from 'waypoints';

export default Component.extend({
  layout,
  classNames: ['hero-headline'],
  classNameBindings: ['fade:is-fade'],
  
  didInsertElement() {
    this._super(...arguments);
    let waypoint = new Waypoint({
      element: this.element,
      offset: 85,
      handler: direction => this.set('fade', direction === 'down')
    });
    this.set('waypoint', waypoint);
  },
  
  willDestroyElement() {
    this._super(...arguments);
    this.get('waypoint').destroy();
  },
});
