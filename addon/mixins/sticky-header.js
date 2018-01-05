import Mixin from '@ember/object/mixin';
import Waypoint from 'waypoints';

export default Mixin.create({
  didInsertElement() {
    this._super(...arguments);
    if (this.get('sticky'))  {
      let waypoint = new Waypoint.Sticky({
        element: this.element,
        offset: this.get('offset')
      });
      this.set('waypoint', waypoint);
    }
  },
  
  willDestroyElement() {
    this._super(...arguments);
    if (this.get('sticky'))  {
      this.get('waypoint').destroy();
    }
  },
});
