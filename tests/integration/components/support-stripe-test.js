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
      {{#nypr-ui/support-stripe theme='wnyc' background=background as |stripe|}}
        {{stripe.text text}}

        {{stripe.link linkText linkHref}}
      {{/nypr-ui/support-stripe}}
    `);

    assert.equal(find('.support-stripe').style.backgroundImage, `url("${BG_IMG}")`);
    assert.equal(find('.support-stripe__heading').textContent.trim(), TEXT);
    assert.equal(find('.support-stripe__link').textContent.trim(), LINK_TEXT);
    assert.equal(find('.support-stripe__link').getAttribute('href'), LINK_HREF);

    let link = find('.support-stripe__link');
    assert.equal(getComputedStyle(link).backgroundColor, 'rgb(222, 30, 61)', 'it applies themes');
  });
});
