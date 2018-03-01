## Module Report
### Unknown Global

**Global**: `Ember.testing`

**Location**: `addon/components/nypr-loading-templates.js` at line 19

```js
  }),
  didRender() {
    if (!Ember.testing && this.get('type') !== 'channel-page') {
      window.scrollTo(0, 0);
    }
```

### Unknown Global

**Global**: `Ember.Test`

**Location**: `tests/integration/components/nypr-form-test.js` at line 23

```js
      isValid: true,
    };
    originalTestAdapterException = Ember.Test.adapter.exception;
    Ember.Test.adapter.exception = function() {};
  },
```

### Unknown Global

**Global**: `Ember.Test`

**Location**: `tests/integration/components/nypr-form-test.js` at line 24

```js
    };
    originalTestAdapterException = Ember.Test.adapter.exception;
    Ember.Test.adapter.exception = function() {};
  },
  afterEach() {
```

### Unknown Global

**Global**: `Ember.Test`

**Location**: `tests/integration/components/nypr-form-test.js` at line 27

```js
  },
  afterEach() {
    Ember.Test.adapter.exception = originalTestAdapterException;
  }
});
```
