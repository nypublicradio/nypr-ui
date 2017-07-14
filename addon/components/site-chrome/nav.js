import Ember from 'ember';
import layout from '../../templates/components/site-chrome/nav';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['site-chrome__nav'],
  classNameBindings: ['media.isLargeAndUp::x-scrollable']
});
