var LessPluginCleanCSS = require('less-plugin-clean-css');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './App-Src/index.js']
    },
    output: {
        path: __dirname + '/App',
        filename: 'app.js'
    },
    devtool: 'source-map',
    resolve: {
        modulesDirectories: ['web_modules', 'node_modules', 'less']
    },
    lessLoader: {
        lessPlugins: [
            new LessPluginCleanCSS({advanced: true})
        ]
    },
    module: {
        preLoaders: [
            { test: /\.js$/, exclude: /(node_modules|lib)/, loader: 'jscs-loader'},
            { test: /\.jsx$/, exclude: /(node_modules|lib)/, loader: 'jscs-loader'}
        ],
        loaders: [
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=100&minetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=100&minetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=100&minetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=100&minetype=image/svg+xml' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.jsx$/, loader: 'jsx-loader!babel-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    jscs: {
        reporter: function(errors) {
            var message = errors.getErrorList().map(function(error) {
                return '\x1b[32m ' + error.rule +
                  ' \x1b[36m @ line ' + error.line +
                  ' char ' + error.column +
                  '\n \x1b[37m    ' + error.message + '\n';
            }).join('\n');

            if (errors.getErrorList().length) {
                var error = '\n\x1b[33m ---------------------------------------- \n\n \x1b[39;49m' +
                'Linting Errors\n\n \x1b[0m ' +
                message +
                '\n \x1b[33m ---------------------------------------- \n\x1b[0m';
                this.emitWarning(error);
            }
        },
        // https://github.com/airbnb/javascript
        // for es6
        esnext: true,
        // for jsx
        esprima: 'esprima-fb',
        // overriding airbnb default styles
        disallowSpacesInNamedFunctionExpression: {
            beforeOpeningRoundBrace: true
        },
        disallowSpacesInFunctionExpression: {
            beforeOpeningRoundBrace: true
        },
        disallowSpacesInAnonymousFunctionExpression: {
            beforeOpeningRoundBrace: true
        },
        disallowSpacesInFunctionDeclaration: {
            beforeOpeningRoundBrace: true
        },
        disallowEmptyBlocks: true,
        disallowSpacesInsideArrayBrackets: true,
        disallowSpacesInsideParentheses: true,
        disallowQuotedKeysInObjects: true,
        disallowSpaceAfterObjectKeys: true,
        disallowSpaceAfterPrefixUnaryOperators: true,
        disallowSpaceBeforePostfixUnaryOperators: true,
        disallowSpaceBeforeBinaryOperators: [
            ','
        ],
        disallowMixedSpacesAndTabs: true,
        disallowTrailingWhitespace: true,
        disallowTrailingComma: true,
        disallowYodaConditions: true,
        disallowKeywords: ['with'],
        disallowMultipleLineBreaks: true,
        requireSpaceBeforeBlockStatements: true,
        requireParenthesesAroundIIFE: true,
        requireSpacesInConditionalExpression: true,
        requireMultipleVarDecl: true,
        requireBlocksOnNewline: 1,
        requireCommaBeforeLineBreak: true,
        requireSpaceBeforeBinaryOperators: true,
        requireSpaceAfterBinaryOperators: true,
        requireCamelCaseOrUpperCaseIdentifiers: true,
        requireLineFeedAtFileEnd: true,
        requireCapitalizedConstructors: true,
        requireDotNotation: true,
        requireSpacesInForStatement: true,
        requireCurlyBraces: [
            'do'
        ],
        requireSpaceAfterKeywords: [
            'if',
            'else',
            'for',
            'while',
            'do',
            'switch',
            'case',
            'return',
            'try',
            'catch',
            'typeof'
        ],
        safeContextKeyword: '_this',
        validateLineBreaks: 'CRLF',
        validateQuoteMarks: "'",
        validateIndentation: 4
    }
}
