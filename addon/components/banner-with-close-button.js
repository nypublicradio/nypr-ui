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
      let future = new Date();
      future.setDate(future.getDate() + 30);
      cookieService.write('hasSeenBanner', true, {path: '/', expires: future});
      this.set('closed', true);
    },
    elementClicked({target}) {
      if (target.tagName.toLowerCase() === 'a') {
        let cookieService = this.get('cookies');
        let future = new Date();
        future.setDate(future.getDate() + 30);
        cookieService.write('hasSeenBanner', true, {path: '/', expires: future});
        this.set('closed', true);
      }
    }
  },
});
