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
};

test('it renders', function(assert) {
  this.render(hbs`
    {{#nypr-share-button as |share|}}
      {{share.button type='Facebook'}}
      {{share.button type='Twitter'}}
      {{share.button type='Email'}}
    {{/nypr-share-button}}
  `);
  let actualContents = this.$().text().trim().split(/\s+/);
  const expectedContents = ['Facebook', 'Twitter', 'Email'];
  assert.deepEqual(actualContents, expectedContents, 'it should render the expected text');
});

test('email link has correct url when passed shareUrl', function(assert) {
  let shareText = exampleStory.title;
  let shareUrl = exampleStory.url;
  this.set('shareText', shareText);
  this.set('shareUrl', shareUrl);
  this.render(hbs`
    {{#nypr-share-button as |share|}}
      {{share.button type='Email' shareUrl=shareUrl shareText=shareText}}
    {{/nypr-share-button}}
  `);

  let actualUrl = this.$('a').attr('href');
  const expectedUrl = `mailto:?subject=${urlEncode(shareText)}&body=${urlEncode(shareUrl)}`;
  assert.equal(actualUrl, expectedUrl);
});

test('it closes the popup when you click the facebook share button', function(assert) {
  assert.expect(2);
  this.render(hbs`
    {{#nypr-share-button as |share|}}
      {{share.button type='Facebook' shareUrl=exampleStory.url shareText=exampleStory.title}}
    {{/nypr-share-button}}
  `);

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
  this.render(hbs`
    {{#nypr-share-button as |share|}}
      {{share.button type='Twitter' shareUrl=exampleStory.url shareText=exampleStory.title}}
    {{/nypr-share-button}}
  `);
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
  this.render(hbs`
    {{#nypr-share-button as |share|}}
      {{share.button type='Email' shareText=exampleStory.title}}
    {{/nypr-share-button}}
  `);
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
