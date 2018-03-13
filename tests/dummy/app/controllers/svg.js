import Controller from '@ember/controller';

export default Controller.extend({

  init() {
    this.icons = [
      'caret-down',
      'checkmark',
      'close',
      'download-arrow',
      'embed',
      'forward15',
      'jlgreene-logo',
      'left-arrow',
      'mute',
      'pause-circle',
      'pause-hollow-small',
      'pause-hollow',
      'pause',
      'people-in-circles',
      'play-circle',
      'play-hollow-small',
      'play-hollow',
      'play',
      'reorder',
      'rewind15',
      'search',
      'share',
      'speaker',
      'trash',
      'trending',
      'user',
      'video',
      'volume',
      'wnyc-logo',
      'wqxr-logo-blue',
      'wqxr-logo-w-station',
      'wqxr-logo'
    ];
    this._super(...arguments);
  }
});
