import Ember from 'ember';
import layout from '../../../templates/components/site-chrome/nav/link';

const LinkComponent =  Ember.Component.extend({
  layout,
  tagName: ''
});

LinkComponent.reopenClass({
  positionalParams: ['text', 'route']
})

export default LinkComponent;
