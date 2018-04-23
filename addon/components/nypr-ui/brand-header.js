import Component from '@ember/component';
import layout from '../../templates/components/nypr-ui/brand-header';
export default Component.extend({
  layout,
  tagName: '',
  init() {
    let menuItems = [
      {name: "WNYC", url: "https://www.wnyc.org"},
      {name: "Gothamist", url: "https://www.gothamist.com"},
      {name: "WNYC Studios", url: "https://www.wnycstudios.org"},
      {name: "NJPR", url: "http://www.njpublicradio.org"},
      {name: "WQXR", url: "https://www.wqxr.org"},
      {name: "New Sounds", url: "https://www.newsounds.org"}
    ];
    this.set('menuItems', menuItems);

    this._super(...arguments);
  }
});
