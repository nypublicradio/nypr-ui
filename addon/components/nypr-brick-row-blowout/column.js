import Ember from 'ember';
import layout from '../../templates/components/nypr-brick-row-blowout/column';

export default Ember.Component.extend({
  layout,
  classNames: ['row__col'],
  classNameBindings: ['flipped']
});
