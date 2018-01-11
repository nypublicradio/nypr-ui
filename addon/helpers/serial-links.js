import { helper } from "@ember/component/helper"
import { listSeparator } from 'nypr-ui/helpers/list-separator';
import { htmlSafe } from '@ember/string';
import { get } from '@ember/object';

//this helper is expecting an array of objects with text and url keys
export function serialLinks([ links ], {unlinked=false, textKey='name', urlKey='url'}={}) {
  let finalString = '';

  let separators = links.map(function(val, idx, arr){
    return listSeparator([arr,idx]);
  });

  links.forEach((link, idx) => {
    let line = '';
    line += separators[idx];
    
    if (unlinked){
      line += get(link, textKey);
    } else {
      line += `<a href="${get(link, urlKey)}" >${get(link, textKey)}</a>`;
    }

    finalString += line;
  });

  return htmlSafe(`${finalString}`);
}

export default helper(serialLinks);
