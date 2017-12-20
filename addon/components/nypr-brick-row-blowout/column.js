import Component from '@ember/component';
import layout from '../../templates/components/nypr-brick-row-blowout/column';

export default Component.extend({
  layout,
  classNames: ['row__col'],
  classNameBindings: ['flipped']
});
