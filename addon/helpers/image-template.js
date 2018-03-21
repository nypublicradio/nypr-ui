import { helper } from '@ember/component/helper';

export function imageTemplate([template, x, y, crop, quality=85]) {
  function replaceFn(originalString, base, path) {
    return `${base}/${x}/${y}/${crop}/${quality}/${path}`;
  }

  return template && template.replace(/(.*\/i)\/%s\/%s\/%s\/%s\/(.*)/, replaceFn);
}

export default helper(imageTemplate);
