import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

export function linkOrText([ target ], {textKey='name', urlKey='url'} = {}) {
  if (!target) {
    return '';
  } else if (typeof target === 'string')  {
    return target;
  }

  let text = get(target, textKey);
  let url = get(target, urlKey);
  if (url) {
    return `<a href="${url}">${text}</a>`;
  } else {
    return text;
  }
}

export default helper(linkOrText);
