# nypr-ui

[![Greenkeeper badge](https://badges.greenkeeper.io/nypublicradio/nypr-ui.svg)](https://greenkeeper.io/)
[![CircleCI](https://img.shields.io/circleci/project/github/nypublicradio/nypr-ui.svg?style=flat-square-blue)](https://circleci.com/gh/nypublicradio/nypr-ui) [![GitHub release](https://img.shields.io/github/release/nypublicradio/nypr-ui.svg?style=flat-square)](https://github.com/nypublicradio/nypr-ui/releases/latest) [![GitHub pull requests](https://img.shields.io/github/issues-pr/nypublicradio/nypr-ui.svg?style=flat-square)](https://github.com/nypublicradio/nypr-ui/pulls) [![GitHub contributors](https://img.shields.io/github/contributors/nypublicradio/nypr-ui.svg?style=flat-square)](https://github.com/nypublicradio/nypr-ui/graphs/contributors)

## The New York Public Radio UI Library

The goal of this ember add on is to centralize all of our common UI components so we can avoid branching dependencies and also provide a way for the multiple client apps to share reusable code.

## Install and Setup

`$ npm install --save-dev nypublicradio/nypr-ui`

As of this writing, this provides access to these SASS partials:
```scss
@import "nypr-ui/buttons";
@import "nypr-ui/card";
@import "nypr-ui/input";
@import "nypr-ui/vars";
```

Careful when using these. `nypr-ui/card`, `nypr-ui/input`, and `nypr-ui/buttons` all output CSS, so they should not be imported more than once in a project or else your CSS will become bloated.

### Most Common Use Case

Looks like this:

```scss
// project/app/styles/app.scss
@import "nypr-ui";

@import "your-local-partial";
@import "another-local-partial";
```

Then you can freely use mixins or override styles defined in `nypr-ui`.

### Notes for Addons

When using this library in an addon, some things to remember.

* Add an `included` hook to the addon's `index.js`:

```node
// index.js
module.exports = {
  ...
  included: function() {
    this._super.included(this, arguments);
  }
  ...
}
```

* If you're using `ember-cli-sass` or `ember-cli-compass-compiler`, special care needs to be taken when arranging your sass files.

```sh
addon/
|__ styles/
    |__ addon.scss # empty file; include it so the compilers don't choke

app/
|__ styles/
    |__ <your-addon-name>.scss # put your styles and exportable sass mixins here

tests/
|__ dummy/
    |__ app/
        |__ styles/
            |__ app.scss # dummy app styles go here, never touched by consuming app or addons
```

With this structure, apps or addons which consume your addon *should* be have access to your sass mixins through `@import "<your-addon-name>";`.

* If you're using `ember-cli-sass` or `ember-cli-compass-compiler`, they need to be listed in the `dependencies` section of your `package.json` -- not the `devDependencies` section. And remember that those addons are mutually exclusive.

### Components

This add-on also provides a few components which can be invoked in templates:
* `nypr-form`: basic form which abstracts a lot of boilerplate for using changesets
* `nypr-card`: basic UI widget
* `nypr-multi-card`: switch between multiple panels in the same card
* `nypr-input`: form field with error states. compatible with changesets
* `nypr-social-icons`: a list of links formatted as a row of font awesome icons
* `nypr-svg`: add svg icons in your templates

### Installation

* `git clone git@github.com:nypublicradio/nypr-ui.git` this repository
* `cd nypr-ui`
* `yarn install`
* `bower install`

### Linting

* `yarn run lint:js`
* `yarn run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

### License

This project is licensed under the [MIT License](LICENSE.md).
