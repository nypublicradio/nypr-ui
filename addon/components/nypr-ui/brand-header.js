import Component from '@ember/component';
import layout from '../../templates/components/nypr-ui/brand-header';
import {getOwner} from '@ember/application';
import {computed} from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  init() {
    let menuItems = [
      {
        name: 'WNYC',
        slug: 'wnyc',
        url: `https://www.wnyc.org`,
        svg: 'wnyc-logo',
      },
      {
        name: 'Gothamist',
        slug: 'gothamist',
        url: `https://www.gothamist.com`,
        svg: 'gothamist-logo',
      },
      {
        name: 'WNYC Studios',
        slug: 'wnycstudios',
        url: `https://www.wnycstudios.org`,
        svg: 'wnyc-studios-logo',
      },
      {
        name: 'NJPR',
        slug: 'njpr',
        url: `http://www.njpublicradio.org`,
        svg: 'njpr-logo',
      },
      {
        name: 'WQXR',
        slug: 'wqxr',
        url: `https://www.wqxr.org`,
        svg: 'wqxr-logo',
      },
      {
        name: 'New Sounds',
        slug: 'newsounds',
        url: `https://www.newsounds.org`,
        svg: 'new-sounds-logo',
      },
      {
        name: 'The Greene Space',
        slug: 'thegreenespace',
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
  }),
});
