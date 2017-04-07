import Component from 'ember-component';
import computed from 'ember-computed';
import layout from '../templates/components/nypr-brick-layout';

export default Component.extend({
  layout,
  tagName: '',
  groups: computed('items', function() {
    let items = this.get('items');
    return [
      items.slice(0, 3),
      items.slice(3, 5),
      items.slice(5)
    ];
  })
});
