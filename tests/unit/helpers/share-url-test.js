import { shareUrl } from 'dummy/helpers/share-url';
import { module, test } from 'qunit';

module('Unit | Helper | share url');

// Replace this with your real tests.
test('it generates the correct share urls', function(assert) {
  let data = {shareText: 'Cool Story', shareUrl: 'http://wnyc.org', via: 'WNYC'};
  let testCases = [{
    description: 'facebook',
    service: 'Facebook',
    shareText: data.shareText,
    shareUrl: data.shareUrl,
    expectedResult: 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwnyc.org%2F'
  },{
    description: 'twitter',
    service: 'Twitter',
    shareText: data.shareText,
    shareUrl: data.shareUrl,
    via: data.via,
    expectedResult: 'https://twitter.com/intent/tweet?url=http%3A%2F%2Fwnyc.org%2F&text=Cool%20Story&via=WNYC'
  },{
    description: 'email',
    service: 'Email',
    shareText: data.shareText,
    shareUrl: data.shareUrl,
    expectedResult: 'mailto:?subject=Cool%20Story&body=http%3A%2F%2Fwnyc.org%2F'
  },{
    description: 'Null',
    service: null,
    input: null,
    expectedResult: ''
  },
  {
    description: 'facebook',
    service: 'Facebook',
    shareText: data.shareText,
    shareUrl: '//wnyc.org',
    expectedResult: 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwnyc.org%2F'
  },
];

  testCases.forEach(testCase => {
    let actual = shareUrl([testCase.service, testCase.shareUrl, testCase.shareText, testCase.via]);
    const expected = testCase.expectedResult;
    assert.deepEqual(actual, expected, testCase.description);
  });
});
