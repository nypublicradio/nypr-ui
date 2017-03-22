import Component from 'ember-component';
import computed from 'ember-computed';

export default Component.extend({
  tagName: '',
  vertical: computed(function() {
    let template = this.get('template');
    return template ? true : false;
  })
});
