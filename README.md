# embroider-macros-caching-repro

This is a simple repo to help in reproducing a weird caching bug w/ `ember-engines` & `@embroider/macros`. The issue seems to be related to a previously cached macro being used incorrectly. For example, `ember-engines` uses `@embroider/macros` to have differing logic depending on `ember-source` version; in this case, it's possible for a previously cached version to be used for an incompatible `ember-source` version.

## Steps to reproduce

1. Clone repo, `yarn install`
1. Run `ember b`
1. Open `dist/assets/vendor.js`; the evaluated macro (specifically the one used in `link-to-external`) from `ember-engines` is correct
1. Run `yarn add ember-source@3.24.0`
1. Run `ember b`
1. Open `dist/assets/vendor.js`; the evaluated macro (specifically the one used in `link-to-external`) from `ember-engines` is _incorrect_
1. Run `CI=true ember b`
1. Open `dist/assets/vendor.js`; notice that the evaluated macro (specifically the one used in `link-to-external`) is now different

In this state, if you build with `CI=true`, you'll get the correct macro condition being evaluated; however, if you build without `CI=true` you'll (seemingly) get the previously cached version being used.
