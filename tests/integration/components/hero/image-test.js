import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-ui/hero/image', 'Integration | Component | nypr ui/hero/image', {
  integration: true
});

test('it fires the sendImage action when rendered', function() {
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
  
  this.render(hbs`{{nypr-ui/hero/image sendImage=sendImage src=SRC source=SOURCE caption=CAPTION credit=CREDIT}}`);
});
