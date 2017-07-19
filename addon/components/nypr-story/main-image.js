import Ember from 'ember';
import layout from '../../templates/components/nypr-story/main-image';
import imageLoaderMixin from 'nypr-ui/mixins/image-loader';

export default Ember.Component.extend(imageLoaderMixin, {
  layout,
  captionOpen: false,

  actions: {
    toggleCaption(){
      this.toggleProperty("captionOpen");
    }, 
  }

});