import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import { urlEncode } from 'dummy/helpers/url-encode';

moduleForComponent('nypr-nypr-share-button', 'Integration | Component | nypr share button', {
  integration: true,
});

let exampleStory = {
  title: 'Cool Link',
  url: 'http://wnyc.org/story/cool-link',
  analyticsCode: '123',
};

test('it renders', function(assert) {
  this.render(hbs`{{nypr-share-button}}`);
  let actualContents = this.$().text().trim().split(/\s+/);
  const expectedContents = ['Facebook', 'Twitter', 'Email'];
  assert.deepEqual(actualContents, expectedContents, 'it should render the expected text');
});

test('it renders the correct number of links', function(assert) {
  const expectedLinkCount = 3;
  this.render(hbs`{{nypr-share-button}}`);
  let actualLinkCount = this.$('.nypr-sharebutton-listitem').length;
  assert.equal(actualLinkCount, expectedLinkCount);
});

test('email link has correct url when passed shareUrl', function(assert) {
  let shareText=  exampleStory.title;
  let shareUrl = exampleStory.url;
  this.set('shareText', shareText);
  this.set('shareUrl', shareUrl);
  this.render(hbs`{{nypr-share-button shareText=shareText shareUrl=shareUrl}}`);

  let actualUrl = this.$('a').attr('href');
  const expectedUrl = `mailto:?subject=${urlEncode(shareText)}&body=${urlEncode(shareUrl)}`;
  assert.equal(actualUrl, expectedUrl);
});

test('it closes the popup when you click the facebook share button', function(assert) {
  assert.expect(2);
  this.render(hbs`{{nypr-share-button shareText=exampleStory.title shareUrl=exampleStory.url}}`);
  this.$('.nypr-popupmenu-button')[0].click();

  wait().then(() => {
    assert.ok(this.$('.nypr-popupmenu').hasClass('is-open'), 'popup menu should open after you click the share button');
    this.$('button:contains(Facebook)')[0].click();
  });

  return wait().then(() => {
    assert.notOk(this.$('.nypr-popupmenu').hasClass('is-open'), 'popup menu should close after you click the Facebook button');
  });
});

test('it closes the popup when you click the twitter share button', function(assert) {
  assert.expect(2);
  this.render(hbs`{{nypr-share-button shareText=exampleStory.title shareUrl=exampleStory.url}}`);
  this.$('.nypr-popupmenu-button')[0].click();

  wait().then(() => {
    assert.ok(this.$('.nypr-popupmenu').hasClass('is-open'), 'popup menu should open after you click the share button');
    this.$('button:contains(Twitter)')[0].click();
  });

  return wait().then(() => {
    assert.notOk(this.$('.nypr-popupmenu').hasClass('is-open'), 'popup menu should close after you click the Twitter button');
  });
});

test('it closes the popup when you click the email share button', function(assert) {
  assert.expect(2);
  this.render(hbs`{{nypr-share-button shareText=exampleStory.title}}`);
  this.$('.nypr-popupmenu-button')[0].click();

  wait().then(() => {
    assert.ok(this.$('.nypr-popupmenu').hasClass('is-open'), 'popup menu should open after you click the share button');
    this.$('a:contains(Email)').attr('href', '#');
    this.$('a:contains(Email)')[0].click();
  });

  return wait().then(() => {
    assert.notOk(this.$('.nypr-popupmenu').hasClass('is-open'), 'popup menu should close after you click the Email button');
  });
});

test('it calls onShare when you click the facebook share button', function(assert) {
  assert.expect(2);

  let onShareCalled = false;
  let onShareArgs;

  let onShare = function(type) {
    onShareCalled = true;
    onShareArgs = type;
  }

  this.set('onShare', onShare);
  this.render(hbs`{{nypr-share-button shareText=exampleStory.title shareUrl=exampleStory.url onShare=onShare}}`);
  this.$('.nypr-popupmenu-button')[0].click();
  wait().then(() => {
    this.$('button:contains(Facebook)')[0].click();
  });

  return wait().then(() => {
    assert.ok(onShareCalled, "on share should have been called");
    assert.equal(onShareArgs, "Facebook", "on share should have been called with facebook as argument");
  });
});

test('it calls onShare when you click the twitter share button', function(assert) {
  assert.expect(2);

  let onShareCalled = false;
  let onShareArgs;

  let onShare = function(type) {
    onShareCalled = true;
    onShareArgs = type;
  }

  this.set('onShare', onShare);
  this.render(hbs`{{nypr-share-button shareText=exampleStory.title shareUrl=exampleStory.url onShare=onShare}}`);
  this.$('.nypr-popupmenu-button')[0].click();
  wait().then(() => {
    this.$('button:contains(Twitter)')[0].click();
  });

  return wait().then(() => {
    assert.ok(onShareCalled, "on share should have been called");
    assert.equal(onShareArgs, "Twitter", "on share should have been called with email as argument");
  });
});

test('it calls onShare when you click the email link', function(assert) {
  assert.expect(2);

  let onShareCalled = false;
  let onShareArgs;

  let onShare = function(type) {
    onShareCalled = true;
    onShareArgs = type;
  }

  this.set('onShare', onShare);
  this.render(hbs`{{nypr-share-button shareText=exampleStory.title shareUrl=exampleStory.url onShare=onShare}}`);
  this.$('.nypr-popupmenu-button')[0].click();

  wait().then(() => {
    this.$('a:contains(Email)').attr('href', '#');
    this.$('a:contains(Email)')[0].click();
  });

  return wait().then(() => {
    assert.ok(onShareCalled, "on share should have been called");
    assert.equal(onShareArgs, "Email", "on share should have been called with email as argument");
  });
});

test('onShare can be customized with additional data that share button doesnt need to know about ', function(assert) {
  assert.expect(3);

  let receivedAnalytics, receivedFrom, receivedContext;
  let onShare = function(analyticsCode, context, from) {
    receivedAnalytics = analyticsCode;
    receivedFrom = from;
    receivedContext = context;
  }

  this.set('onShare', onShare);
  this.render(hbs`{{nypr-share-button shareText=exampleStory.title shareUrl=exampleStory.url onShare=(action onShare '125125' 'player')}}`);
  this.$('.nypr-popupmenu-button')[0].click();

  wait().then(() => {
    this.$('button:contains(Twitter)')[0].click();
  });

  return wait().then(() => {
    assert.equal(receivedAnalytics, '125125', "should have received passed analytics code");
    assert.equal(receivedFrom, 'Twitter', "should have received from Twitter");
    assert.equal(receivedContext, 'player', "should have received context");
  });
});
