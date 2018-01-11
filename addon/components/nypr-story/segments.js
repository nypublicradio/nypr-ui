import Component from '@ember/component';
import layout from '../../templates/components/nypr-story/segments';

export default Component.extend({
  layout,
  accordionOpen: true,

  actions: {
    toggleAccordion(){
      this.toggleProperty('accordionOpen');
    }, 
  }
});