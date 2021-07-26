/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'foo',
    environment,
  };

  return ENV;
};
