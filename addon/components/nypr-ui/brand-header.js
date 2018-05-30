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
        url: `https://www.wnyc.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${config.siteSlug}`,
        svg: 'wnyc-logo',
      },
      {
        name: 'Gothamist',
        url: `https://www.gothamist.com?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${config.siteSlug}`,
        svg: 'gothamist-logo',
      },
      {
        name: 'WNYC Studios',
        url: `https://www.wnycstudios.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${config.siteSlug}`,
        svg: 'wnyc-studios-logo',
      },
      {
        name: 'NJPR',
        url: `http://www.njpublicradio.org`,
        svg: 'njpr-logo',
      },
      {
        name: 'WQXR',
        url: `https://www.wqxr.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${config.siteSlug}`,
        svg: 'wqxr-logo',
      },
      {
        name: 'New Sounds',
        url: `https://www.newsounds.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${config.siteSlug}`,
        svg: 'new-sounds-logo',
      },
      {
        name: 'The Greene Space',
        url: `https://www.thegreenespace.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${config.siteSlug}`,
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
