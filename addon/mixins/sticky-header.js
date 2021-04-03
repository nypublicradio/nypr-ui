import Mixin from '@ember/object/mixin';
import { assert } from '@ember/debug';
import Waypoint from 'waypoints';

export default Mixin.create({
  didInsertElement() {
    this._super(...arguments);
    if (this.sticky)  {
      assert("Waypoint.Sticky is not defined. Did you include `useWaypoints: true` in your application config?", Waypoint.Sticky);
      let waypoint = new Waypoint.Sticky({
        element: this.element,
        offset: this.offset
      });
      this.set('waypoint', waypoint);
    }
  },
  
  willDestroyElement() {
    this._super(...arguments);
    if (this.sticky)  {
      this.waypoint.destroy();
    }
  },
  
  refresh() {
    Waypoint.refreshAll();
  }
});
