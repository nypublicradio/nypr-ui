import Ember from 'ember';
import layout from '../../../templates/components/site-chrome/nav/item';

export default Ember.Component.extend({
  layout,
  tagName: 'li',
  classNames: ['site-chrome__link']
});
