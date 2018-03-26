import Component from '@ember/component';
import layout from '../../templates/components/support-stripe/heading';

const Heading = Component.extend({
  layout,
  classNames: ['support-stripe__heading']
});

Heading.reopenClass({
  positionalParams: ['text']
});

export default Heading;
