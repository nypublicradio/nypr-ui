import Ember from 'ember';
const {
  Helper
} = Ember;

export function authorList([ authors ]/*, hash*/, {unlinked=false}={}) {
  let finalString = '';

  authors.forEach((author, idx) => {
    let line = '';
    
    if (unlinked){
      line = author.name;
    } else {
      line = `<a href="${author.url}" >${author.name}</a>`;
    }

    if (idx === authors.length - 2){
      line += ' and ';
    } else if (idx < authors.length - 1){
      line += ', ';
    }

    finalString += line;
  });

  return Ember.String.htmlSafe(`${finalString}`);
}

export default Helper.helper(authorList);