import { helper } from '@ember/component/helper';

export function listSeparator([obj, index]) {

  if (index === 0){
    return '';
  } else if (index === obj.length-1){
    return " and ";
  } else {
    return ', ';
  }

}

export default helper(listSeparator);
