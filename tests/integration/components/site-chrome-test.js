import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | site chrome', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{site-chrome}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#site-chrome}}
        template block text
      {{/site-chrome}}
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('top level blocks', async function(assert) {
    await render(hbs`
      {{#site-chrome as |chrome|}}
        {{chrome.top}}
        {{chrome.nav}}
        {{chrome.body}}
        {{chrome.footer}}
      {{/site-chrome}}
    `);
    
    assert.dom('.site-chrome__top').exists({ count: 1 }, 'top bar renders');
    assert.dom('.site-chrome__nav').exists({ count: 1 }, 'nav section renders');
    assert.dom('.site-chrome__body').exists({ count: 1 }, 'body renders');
    assert.dom('footer.site-chrome__footer').exists({ count: 1 }, 'footer renders');
  });

  test('full usage', async function(assert) {
    function directChildText(node) {
      return Array.from(node.childNodes).filter(n => n.nodeType === 3)
        .map(n => n.textContent.trim())
        .join('');
    }

    await render(hbs`
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
    assert.dom('.site-chrome__top-button').hasText('The Button');
    
    assert.dom('.site-chrome__left-corner').hasText('The upper left corner');
    assert.equal(find('.site-chrome__links-list').textContent.split('\n').map(t => t.trim()).join(''), 'foonon link item');
    assert.equal(this.$('.site-chrome__link').eq(0).text().trim(), 'foo');
    assert.equal(this.$('.site-chrome__link').eq(0).find('a').length, 1);
    
    assert.dom('.site-chrome__nav__footer').hasText('footer of the nav');
    
    assert.dom('.site-chrome__body').hasText('body area');
    
    assert.ok(find('.site-chrome__footer').textContent.trim().match('site footer'));
  });
});
