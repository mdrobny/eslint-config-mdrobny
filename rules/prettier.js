module.exports = {
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                tabWidth: 4,
                useTabs: false,
                semi: true,
                singleQuote: true,
                trailingComma: 'none',
                bracketSpacing: true,
                jsxBracketSameLine: true
            }
        ]
    }
};
