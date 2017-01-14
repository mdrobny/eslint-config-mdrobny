'use strict';

module.exports = {
    extends: [
            './index',
            './rules/react'
        ].map(require.resolve),
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    }
};
