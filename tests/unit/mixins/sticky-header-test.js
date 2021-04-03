import EmberObject from '@ember/object';
import StickyHeaderMixin from 'nypr-ui/mixins/sticky-header';
import { module, test } from 'qunit';

module('Unit | Mixin | sticky header', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let StickyHeaderObject = EmberObject.extend(StickyHeaderMixin);
    let subject = StickyHeaderObject.create();
    assert.ok(subject);
  });
});
