import Component from '@ember/component';
import layout from '../templates/components/logo-link';
import {getOwner} from '@ember/application';
import {computed} from '@ember/object';

export default Component.extend({
  layout,
  siteSlug: computed(function() {
    let config = getOwner(this).resolveRegistration('config:environment');
    return config.siteSlug;
  }),
});
