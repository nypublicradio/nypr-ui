import Ember from 'ember';
import layout from '../../templates/components/nypr-story/segments';

export default Ember.Component.extend({
  layout,
  accordionOpen: true,

  actions: {
    toggleAccordion(){
      if (this.get("accordionOpen")){
        this.set("accordionOpen", false);
      } else {
        this.set("accordionOpen", true);
      }
    }, 
  }
});