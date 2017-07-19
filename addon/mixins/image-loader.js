import Ember from 'ember';

export default Ember.Mixin.create({
  didInsertElement() {

    this.$().imagesLoaded()
      .progress((i, image) => {
        Ember.run(() => {
          image.img.classList.add('is-loaded');
        });
      })
      .done((i) => {
        if(Array.isArray(i.images) && i.images.length) {
          i.images.forEach((image) => {
            Ember.run(() => {
              image.img.classList.add('is-loaded');
            });
          });
        }
      });
    }
});