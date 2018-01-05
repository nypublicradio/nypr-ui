import { helper } from '@ember/component/helper';
import { imageTemplate } from 'nypr-ui/helpers/image-template';

export function imageSrcset([ image, ...sizes ]) {
  if (!image || !sizes) {
    return '';
  }
  let { template, crop } = image;
  let srcset = sizes.map(([ w, h ]) => `${imageTemplate([template, w, h, crop])} ${w}w`);
  return srcset.join(', ');
}

export default helper(imageSrcset);
