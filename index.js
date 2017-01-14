'use strict';

module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/imports',
        './rules/node'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'script',
    },
    env: {
        es6: true
    },
};
