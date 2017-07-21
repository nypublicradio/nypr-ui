import Ember from 'ember';
import { listSeparator } from 'nypr-ui/helpers/list-separator';
const {
  Helper
} = Ember;
import get from 'ember-metal/get';

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

  return Ember.String.htmlSafe(`${finalString}`);
}

export default Helper.helper(serialLinks);