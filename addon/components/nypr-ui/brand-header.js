import Component from '@ember/component';
import layout from '../../templates/components/nypr-ui/brand-header';
import { getOwner } from '@ember/application';
import { computed  } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  init() {
    let config = getOwner(this).resolveRegistration('config:environment');

    let menuItems = [
      {
        name: 'WNYC',
        url: `https://www.wnyc.org`,
        svg: 'wnyc-logo',
      },
      {
        name: 'Gothamist',
        url: `https://www.gothamist.com`,
        svg: 'gothamist-logo',
      },
      {
        name: 'WNYC Studios',
        url: `https://www.wnycstudios.org`,
        svg: 'wnyc-studios-logo',
      },
      {
        name: 'NJPR',
        url: `http://www.njpublicradio.org`,
        svg: 'njpr-logo',
      },
      {
        name: 'WQXR',
        url: `https://www.wqxr.org`,
        svg: 'wqxr-logo',
      },
      {
        name: 'New Sounds',
        url: `https://www.newsounds.org`,
        svg: 'new-sounds-logo',
      },
      {
        name: 'The Greene Space',
        url: `https://www.thegreenespace.org`,
        svg: 'greene-space-logo',
      },
    ];
    this.set('menuItems', menuItems);

    this._super(...arguments);
  },
  siteSlug: computed(function() {
    let config = getOwner(this).resolveRegistration('config:environment');
    return config.siteSlug;
  })
});
