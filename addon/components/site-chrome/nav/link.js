import Component from '@ember/component';
import layout from '../../../templates/components/site-chrome/nav/link';

const LinkComponent =  Component.extend({
  layout,
  tagName: ''
});

LinkComponent.reopenClass({
  positionalParams: ['text', 'route']
})

export default LinkComponent;
