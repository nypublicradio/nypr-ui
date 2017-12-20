import Component from '@ember/component';
import layout from '../../templates/components/nypr-story/producing-org';
import { computed } from '@ember/object';
import imageLoaderMixin from 'nypr-ui/mixins/image-loader';

export default Component.extend(imageLoaderMixin, {
  layout,
  classNames: ['producing-org'],
  tagName: "span",
  url: computed.or('sourceUrl', 'org.url'),
});
