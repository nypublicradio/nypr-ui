import { or } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../../templates/components/nypr-story/producing-org';
import imageLoaderMixin from 'nypr-ui/mixins/image-loader';

export default Component.extend(imageLoaderMixin, {
  layout,
  classNames: ['producing-org'],
  tagName: "span",
  url: or('sourceUrl', 'org.url'),
});
