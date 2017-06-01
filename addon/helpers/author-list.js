import Ember from 'ember';
import { listSeparator } from 'nypr-ui/helpers/list-separator';
const {
  Helper
} = Ember;

export function authorList([ authors ]/*, hash*/, {unlinked=false}={}) {
  let finalString = '';

  let separators = authors.map(function(val, idx, arr){
    return listSeparator([arr,idx]);
  });

  authors.forEach((author, idx) => {
    let line = '';
    line += separators[idx];
    
    if (unlinked){
      line += author.name;
    } else {
      line += `<a href="${author.url}" >${author.name}</a>`;
    }

    finalString += line;
  });

  return Ember.String.htmlSafe(`${finalString}`);
}

export default Helper.helper(authorList);