import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('nypr-ui/hero', 'Integration | Component | hero header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{nypr-ui/hero}}`);

  assert.ok(find('.nypr-ui__hero'), 'should render without a block');

  // Template block usage:
  this.render(hbs`
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
  
  assert.ok(find('.hero-top'), 'top should render');
  assert.ok(find('.hero-top__left'), 'top left should render');
  assert.ok(find('.hero-top__right'), 'top right should render');
  
  assert.ok(find('.hero-headline'), 'headline');
  assert.ok(find('.hero-blurb'), 'blurb');
  assert.ok(find('.hero-lockup'), 'lockup');
});

test('renders an image', function(assert) {
  let backgroundImage = 'https://dummyimage.com/200';
  this.set('image', backgroundImage);
  this.render(hbs`
    {{#nypr-ui/hero as |hero|}}
      {{hero.image src=image credit='the credit'}}
    {{/nypr-ui/hero}}
  `);
  
  let setImage = find('.nypr-ui__hero').style.backgroundImage;
  
  assert.ok(setImage.match(backgroundImage), 'image should render');
  assert.equal(find('.hero-source').textContent.trim(), '(the credit)', 'credit should render');
});
