'use strict';

const rules = ['./index', './rules/react'].map(require.resolve);

module.exports = {
    extends: [...rules, 'prettier/react'],
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    }
};
