'use strict';

const rules = [
    './rules/best-practices',
    './rules/errors',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/prettier'
].map(require.resolve);

module.exports = {
    extends: [...rules, 'prettier'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'script'
    },
    env: {
        es6: true
    }
};
