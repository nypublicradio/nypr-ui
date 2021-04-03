import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

module('Integration | Component | hero header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{nypr-ui/hero}}`);

    assert.dom('.nypr-ui__hero').exists('should render without a block');

    // Template block usage:
    await render(hbs`
      {{#nypr-ui/hero as |hero|}}
        {{#hero.top as |top|}}
          {{#top.left}}
            Logo
          {{/top.left}}
          
          {{#top.right}}
            Donate
          {{/top.right}}
        {{/hero.top}}
      
        {{#hero.headline}}
          Headline
        {{/hero.headline}}
        
        {{#hero.blurb}}
          Blurb
        {{/hero.blurb}}
        
        {{#hero.footer as |footer|}}
          {{#footer.lockup}}
            lockup
          {{/footer.lockup}}
        {{/hero.footer}}
      {{/nypr-ui/hero}}
    `);
    
    assert.dom('.hero-top').exists('top should render');
    assert.dom('.hero-top__left').exists('top left should render');
    assert.dom('.hero-top__right').exists('top right should render');
    
    assert.dom('.hero-headline').exists('headline');
    assert.dom('.hero-blurb').exists('blurb');
    assert.dom('.hero-lockup').exists('lockup');
  });

  test('renders an image', async function(assert) {
    let backgroundImage = 'https://dummyimage.com/200';
    this.set('image', backgroundImage);
    await render(hbs`
      {{#nypr-ui/hero as |hero|}}
        {{hero.image src=image credit='the credit'}}
      {{/nypr-ui/hero}}
    `);
    
    let setImage = find('.nypr-ui__hero > .image-container').style.backgroundImage;
    
    assert.ok(setImage.match(backgroundImage), 'image should render');
    assert.dom('.hero-source').hasText('(the credit)', 'credit should render');
  });
});
