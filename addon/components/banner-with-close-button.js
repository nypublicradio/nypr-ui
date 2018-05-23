import Component from '@ember/component';
import layout from '../templates/components/banner-with-close-button';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Component.extend({
  layout,
  cookies: service(),
  classNames: ['banner-with-close-button'],

  isBannerCookieSet: computed('closed', function() {
    let cookieService = this.get('cookies');
    return cookieService.read('hasSeenBanner');
  }),

  actions: {
    setBannerCookie() {
      let cookieService = this.get('cookies');
      cookieService.write('hasSeenBanner', true, {path: '/'});
      this.set('closed', true);
    },
  },
});
