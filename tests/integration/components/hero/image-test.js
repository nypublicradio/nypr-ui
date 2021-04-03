import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import test from 'ember-sinon-qunit/test-support/test';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr ui/hero/image', function(hooks) {
  setupRenderingTest(hooks);

  test('it fires the sendImage action when rendered', async function() {
    const SRC     = 'SRC';
    const SOURCE  = 'SOURCE';
    const CAPTION = 'CAPTION';
    const CREDIT  = 'CREDIT';
    let mock = this.mock('sendImage').once().withArgs({src: SRC, source: SOURCE, caption: CAPTION, credit: CREDIT});
    this.setProperties({
      sendImage: mock,
      SRC,
      CAPTION,
      SOURCE,
      CREDIT
    });
    
    await render(hbs`{{nypr-ui/hero/image sendImage=sendImage src=SRC source=SOURCE caption=CAPTION credit=CREDIT}}`);
  });
});
