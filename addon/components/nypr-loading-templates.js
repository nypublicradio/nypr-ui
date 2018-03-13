import Component from '@ember/component';
import { computed } from '@ember/object';
import Ember from 'ember';
import layout from '../templates/components/nypr-loading-templates';

export default Component.extend({
  layout,
  classNames: ['l-full'],
  classNameBindings: ['cssOverrides'],
  attributeBindings: ['style'],
  pageTemplate: computed('type', function() {
    let type = this.get('type');
    return `components/nypr-loading-templates/${type}`;
  }),
  cssOverrides: computed('type', function() {
    let type = this.get('type');
    return `${type}-loading`;
  }),
  didRender() {
    if (!Ember.testing && this.get('type') !== 'channel-page') {
      window.scrollTo(0, 0);
    }
  }
});
