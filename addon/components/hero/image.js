import Component from '@ember/component';
import layout from '../../templates/components/hero/image';

export default Component.extend({
  layout,
  tagName: '',

  didRender() {
    this._super(...arguments);
    let sendImage = this.get('sendImage');
    if (sendImage) {
      sendImage(this.getProperties('src', 'source', 'caption', 'credit'))
    }
  },

});
