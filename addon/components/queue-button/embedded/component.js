import QueueButton from '../component';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import layout from '../../../templates/components/queue-button';

function wnycEmbeddedAttr() {
  return computed('embeddedAttrs', {
    get(k) {
      return get(this, `embeddedAttrs.${k}`);
    },
    set(k, v) {
      return v;
    }
  });
}

export default QueueButton.extend({
  itemPK:     wnycEmbeddedAttr(),
  itemTitle:  wnycEmbeddedAttr(),
  type:       wnycEmbeddedAttr(),
  region:     wnycEmbeddedAttr(),

  layout
});
