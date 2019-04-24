import Component from '@ember/component';
import layout from '../../templates/components/nypr-ui/brand-header';
import {getOwner} from '@ember/application';
import {computed} from '@ember/object';
import burgerMenu from 'ember-burger-menu/components/burger-menu';

export default Component.extend({
  layout,
  tagName: '',
  init() {
    let menuItems = [
      {
        name: 'WNYC',
        slug: 'wnyc',
        url: `https://www.wnyc.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${this.get(
          'siteSlug',
        )}`,
        svg: 'wnyc-logo',
      },
      {
        name: 'Gothamist',
        slug: 'gothamist',
        url: `https://www.gothamist.com?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${this.get(
          'siteSlug',
        )}`,
        svg: 'gothamist-logo',
      },
      {
        name: 'WNYC Studios',
        slug: 'wnycstudios',
        url: `https://www.wnycstudios.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${this.get(
          'siteSlug',
        )}`,
        svg: 'wnyc-studios-logo',
      },
      {
        name: 'NJPR',
        slug: 'njpr',
        url: `http://www.njpublicradio.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${this.get(
          'siteSlug',
        )}`,
        svg: 'njpr-logo',
      },
      {
        name: 'WQXR',
        slug: 'wqxr',
        url: `https://www.wqxr.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${this.get(
          'siteSlug',
        )}`,
        svg: 'wqxr-logo',
      },
      {
        name: 'New Sounds',
        slug: 'newsounds',
        url: `https://www.newsounds.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${this.get(
          'siteSlug',
        )}`,
        svg: 'new-sounds-logo',
      },
      {
        name: 'The Greene Space',
        slug: 'thegreenespace',
        url: `https://www.thegreenespace.org?utm_medium=partnersite&utm_campaign=brandheader&utm_source=${this.get(
          'siteSlug',
        )}`,
        svg: 'greene-space-logo',
      },
    ];
    this.set('menuItems', menuItems);

    burgerMenu.reopen({
      attributeBindings: ['aria-hidden']
    });

    this._super(...arguments);
  },

  siteSlug: computed(function() {
    let config = getOwner(this).resolveRegistration('config:environment');
    return config.siteSlug;
  }),
});
