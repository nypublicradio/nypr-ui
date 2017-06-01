import Ember from 'ember';

export default Ember.Mixin.create({
  didInsertElement() {
    this.$().imagesLoaded().progress((i, image) => {
      Ember.run(() => {
        image.img.classList.add('is-loaded');
      });
    });
  }
});