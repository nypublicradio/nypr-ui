import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site-chrome', 'Integration | Component | site chrome', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{site-chrome}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#site-chrome}}
      template block text
    {{/site-chrome}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('top level blocks', function(assert) {
  this.render(hbs`
    {{#site-chrome as |chrome|}}
      {{chrome.top}}
      {{chrome.nav}}
      {{chrome.body}}
      {{chrome.footer}}
    {{/site-chrome}}
  `);
  
  assert.equal(this.$('.site-chrome__top').length, 1, 'top bar renders');
  assert.equal(this.$('.site-chrome__nav').length, 1, 'nav section renders');
  assert.equal(this.$('.site-chrome__body').length, 1, 'body renders');
  assert.equal(this.$('footer.site-chrome__footer').length, 1, 'footer renders');
});

test('full usage', function(assert) {
  function directChildText(node) {
    return Array.from(node.childNodes).filter(n => n.nodeType === 3)
      .map(n => n.textContent.trim())
      .join('');
  }

  this.render(hbs`
    {{#site-chrome as |chrome|}}

      {{#chrome.top as |top|}}
        This is on the far left
        {{#top.body as |body|}}
          This is inside a full wrapper
          {{#body.corner as |button|}}
            Inside the corner with a button
            {{#component button}}
              The Button
            {{/component}}
          {{/body.corner}}
        {{/top.body}}
      {{/chrome.top}}

      {{#chrome.nav as |nav|}}
        {{#nav.corner}}
          The upper left corner
        {{/nav.corner}}
        
        {{#nav.links as |links|}}
          {{links.link 'foo'}}
          {{#links.link}}non link item{{/links.link}}
        {{/nav.links}}
        
        {{#nav.footer}}
          footer of the nav
        {{/nav.footer}}
      {{/chrome.nav}}
      
      {{#chrome.body}}
        body area
      {{/chrome.body}}
      
      {{#chrome.footer}}
        site footer
      {{/chrome.footer}}
    {{/site-chrome}}
  `);

  assert.equal(directChildText(this.$('.site-chrome__top')[0]), "This is on the far left");
  assert.equal(directChildText(this.$('.site-chrome__top__body__right')[0]), "This is inside a full wrapper");
  assert.equal(directChildText(this.$('.site-chrome__right-corner')[0]), "Inside the corner with a button");
  assert.equal(this.$('.site-chrome__top-button').text().trim(), 'The Button');
  
  assert.equal(this.$('.site-chrome__left-corner').text().trim(), 'The upper left corner');
  assert.equal(this.$('.site-chrome__links-list').text().split('\n').map(t => t.trim()).join(''), 'foonon link item');
  assert.equal(this.$('.site-chrome__link').eq(0).text().trim(), 'foo');
  assert.equal(this.$('.site-chrome__link').eq(0).find('a').length, 1);
  
  assert.equal(this.$('.site-chrome__nav__footer').text().trim(), 'footer of the nav');
  
  assert.equal(this.$('.site-chrome__body').text().trim(), 'body area');
  
  assert.ok(this.$('.site-chrome__footer').text().trim().match('site footer'));
});
