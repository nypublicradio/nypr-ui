import { helper } from '@ember/component/helper';
import { urlEncode } from '../helpers/url-encode';

export function shareUrl([destination, shareUrl, shareText, via, twitterHeadline]) {
  if(typeof document === 'undefined') {
    return;
  }
  let a = document.createElement('a');
  a.href = shareUrl;

  let urls = {
    'Facebook': `https://www.facebook.com/sharer/sharer.php?u=${urlEncode(a.href)}`,
    'Twitter':  `https://twitter.com/intent/tweet?url=${urlEncode(a.href)}&text=${urlEncode(twitterHeadline || shareText)}&via=${via}`,
    'Email':    `mailto:?subject=${urlEncode(shareText)}&body=${urlEncode(a.href)}`
  };
  return urls[destination] || '';
}

export default helper(shareUrl);
