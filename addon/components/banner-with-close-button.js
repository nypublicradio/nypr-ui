import Component from '@ember/component';
import layout from '../templates/components/banner-with-close-button';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default Component.extend({
  layout,
  cookies: service(),
  classNames: ['banner-with-close-button'],

  isGdprCookieSet: computed('closed', function() {
    let cookieService = this.get('cookies');
    return cookieService.read('hasSeenGdprBanner');
  }),

  actions: {
    setGdprCookie() {
      let cookieService = this.get('cookies');
      cookieService.write('hasSeenGdprBanner', true, {path: '/'});
      this.set('closed', true);
    },
  },
});
