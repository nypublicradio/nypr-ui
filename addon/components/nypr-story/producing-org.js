import Ember from 'ember';
import layout from '../../templates/components/nypr-story/producing-org';
import computed from 'ember-computed';

export default Ember.Component.extend({
  layout,
  classNames: ['producing-org'],
  tagName: "span",

  url: computed('sourceUrl', 'org.url',  function() {
    let sourceUrl = get(this, 'sourceUrl');
    let orgUrl = get(this, 'org.url');
    return orgUrl;
  }),

  didRender() {
    this.$().imagesLoaded().progress((i, image) => {
      Ember.run(() => {
        image.img.classList.add('is-loaded');
      });
    });
  }
});