import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | support-stripe', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{nypr-ui/support-stripe}}`);

    assert.ok(this.element.querySelector('.support-stripe'));

    const TEXT = 'Join WNYC in bringing Gothamist back to NYC.';
    const LINK_TEXT = 'Support us';
    const LINK_HREF = 'https://example.com/pledge';
    const BG_IMG = '/foo/bar.jpg';

    this.setProperties({
      text: TEXT,
      linkText: LINK_TEXT,
      linkHref: LINK_HREF,
      background: BG_IMG,
    });
    // Template block usage:
    await render(hbs`
      {{#nypr-ui/support-stripe theme='wnyc' href=linkHref background=background as |stripe|}}
        {{stripe.text text}}

        {{stripe.label linkText}}
      {{/nypr-ui/support-stripe}}
    `);

    assert.equal(find('.support-stripe').getAttribute('href'), LINK_HREF, "should have correct link url");
    assert.equal(find('.support-stripe__image').style.backgroundImage, `url("${BG_IMG}")`, "should have correct background image");
    assert.equal(find('.support-stripe__heading').textContent.trim(), TEXT, 'should have correct heading text');
    assert.equal(find('.support-stripe__label').textContent.trim(), LINK_TEXT, "should have correct link text");

    let label = find('.support-stripe__label');
    assert.equal(getComputedStyle(label).backgroundColor, 'rgb(222, 30, 61)', 'it applies themes');
  });
});
