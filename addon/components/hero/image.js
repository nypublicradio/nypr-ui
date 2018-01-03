import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  didRender() {
    this._super(...arguments);
    let sendImage = this.get('sendImage');
    if (sendImage) {
      sendImage(this.getProperties('src', 'source', 'caption', 'credit'))
    }
  },
  
});
