import { run } from '@ember/runloop';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  didRender() {
    this.$().imagesLoaded()
      .progress((i, image) => {
        run(() => {
          image.img.classList.add('is-loaded');
        });
      });
    }
});