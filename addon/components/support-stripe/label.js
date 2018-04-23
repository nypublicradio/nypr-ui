import Component from '@ember/component';
import layout from '../../templates/components/support-stripe/label';

const Link = Component.extend({
  layout,
  classNames: ['support-stripe__label'],
});

Link.reopenClass({
  positionalParams: ['text']
});

export default Link;
