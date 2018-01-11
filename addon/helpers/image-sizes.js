import { helper } from '@ember/component/helper';

export function imageSizes([ ...sizes ]) {
  return sizes.map(([ mq, width ]) => `(${mq}) ${width}px`).join(', ')
}

export default helper(imageSizes);
