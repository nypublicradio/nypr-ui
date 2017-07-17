import Ember from 'ember';
import { listSeparator } from 'nypr-ui/helpers/list-separator';
const {
  Helper
} = Ember;

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
      line += link[textKey];
    } else {
      line += `<a href="${link[urlKey]}" >${link[textKey]}</a>`;
    }

    finalString += line;
  });

  return Ember.String.htmlSafe(`${finalString}`);
}

export default Helper.helper(serialLinks);