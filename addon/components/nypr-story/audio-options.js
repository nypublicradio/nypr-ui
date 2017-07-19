import Ember from 'ember';
import layout from '../../templates/components/nypr-story/audio-options';

export default Ember.Component.extend({
  layout,
  classNames: ['nypr-story-audio-options'],

  actions: {
    selectEmbedCode(){
      this.$("textarea").select();
    },
  }
});