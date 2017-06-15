import Ember from 'ember';
import layout from '../../templates/components/nypr-story/header-content';
import imageLoaderMixin from 'nypr-ui/mixins/image-loader';

export default Ember.Component.extend(imageLoaderMixin, {
  layout,
});
