import Ember from 'ember';
import layout from '../../templates/components/nypr-story/segments';

export default Ember.Component.extend({
  layout,
  accordionOpen: true,

  actions: {
    toggleAccordion(){
      this.toggleProperty('accordionOpen');
    }, 
  }
});