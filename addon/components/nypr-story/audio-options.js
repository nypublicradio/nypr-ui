import Component from '@ember/component';
import layout from '../../templates/components/nypr-story/audio-options';

export default Component.extend({
  layout,
  classNames: ['nypr-story-audio-options'],

  actions: {
    selectEmbedCode(){
      this.$("textarea").select();
    },
  }
});