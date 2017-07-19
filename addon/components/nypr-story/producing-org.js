import Ember from 'ember';
import layout from '../../templates/components/nypr-story/producing-org';
import computed from 'ember-computed';
import imageLoaderMixin from 'nypr-ui/mixins/image-loader';

export default Ember.Component.extend(imageLoaderMixin, {
  layout,
  classNames: ['producing-org'],
  tagName: "span",
  url: computed.or('sourceUrl', 'org.url'),
});