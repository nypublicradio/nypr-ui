import Controller from '@ember/controller';

export default Controller.extend({
  data: 'whatever',
  otherData: 'even better',

  init() {
    this.something = [1,2,3,5,5];
    this._super(...arguments);
  }
});
