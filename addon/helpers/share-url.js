import { helper } from 'ember-helper';
import { urlEncode } from 'nypr-ui/helpers/url-encode';

export function shareUrl([destination, metadata]) {
  metadata = metadata || {};
  let { shareText, shareUrl, via, twitterHeadline } = metadata;
  let urls = {
    'Facebook': `https:\/\/www.facebook.com/sharer/sharer.php?u=${urlEncode(shareUrl)}`,
    'Twitter':  `https:\/\/twitter.com/intent/tweet?url=${urlEncode(shareUrl)}&text=${urlEncode(twitterHeadline)}&via=${via}`,
    'Email':    `mailto:?subject=${urlEncode(shareText)}&body=${urlEncode(shareUrl)}`
  };
  return urls[destination] || '';
}

export default helper(shareUrl);