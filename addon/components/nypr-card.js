import Ember from 'ember';
import layout from '../templates/components/nypr-card';

export default Ember.Component.extend({
  isEditing: false,

  classNames: ['nypr-card'],

  layout,
});
