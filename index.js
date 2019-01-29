module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
           "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "mocha": true
    },
    "plugins": [
        "react",
        "json",
        "import",
        "mocha",
        "filenames"
    ],
    "settings": {
        "import/resolver": "webpack",
        "import/extensions": [".js", ".jsx"],
        "import/ignore": [
            "webpack.*",
            "node_modules",
            ".(scss|css)$"
        ]
    },
    "rules": {
        "indent": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": "error",
        "no-multi-spaces": "error",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "key-spacing": "warn",
        "one-var": ["error", "never"],
        "camelcase": ["error", { "properties": "never" }],
        "quotes": [
            "error",
            "single"
        ],
        "comma-spacing": "error",
        "comma-style": "error",
        "keyword-spacing": "error",
        "consistent-this": [
            "error",
            "self"
        ],
        "computed-property-spacing": "error",
        "linebreak-style": "error",
        "semi": "error",
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "space-in-parens": "error",
        "spaced-comment": "error",
        "space-before-function-paren": ["error", "never"],
        "space-unary-ops": "error",
        "space-infix-ops": "error",
        "padded-blocks": ["error", "never"],
        "strict": [
            "error",
            "never"
        ],
        "complexity": ["warn", { "max": 20 }],
        "max-len": ["warn", 120],
        "max-params": ["error", 5],
        "eqeqeq": "error",
        "operator-linebreak": ["error", "after"],
        "object-curly-spacing": ["error", "always"],
        "no-var": "error",
        "no-undef": "warn",
        "no-console": "warn",
        "no-unreachable": "warn",
        "no-const-assign": "error",
        "no-confusing-arrow": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-func-assign": "error",
        "no-useless-concat": "error",
        "no-unused-vars": [
            "error",
            { "varsIgnorePattern": "[sS]tyles|icons" }
        ],
        "no-irregular-whitespace": "error",
        "no-mixed-requires": "error",
        "no-multiple-empty-lines": [2, {"max": 1}],
        "prefer-const": "warn",
        "prefer-template": "warn",
        "prefer-spread": "warn",
        "prefer-rest-params": "warn",

        "react/jsx-equals-spacing": "error",
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-no-comment-textnodes": "error",
        "react/prop-types": "error",
        "react/no-deprecated": "warn",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-danger-with-children": "error",
        "react/no-string-refs": "warn",
        "react/no-did-mount-set-state": "warn",
        "react/no-did-update-set-state": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-unknown-property": "error",
        "react/no-unused-prop-types": "error",
        "react/style-prop-object": "error",
        "react/react-in-jsx-scope": "error",
        "react/self-closing-comp": "error",
        "react/jsx-indent": "error",
        "react/jsx-indent-props": "error",
        "react/jsx-key": "warn",
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "react/jsx-no-undef": "warn",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-curly-spacing": ["error", "never"],
        "react/jsx-wrap-multilines": "error",
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],
        "react/jsx-tag-spacing": "error",
        "jsx-quotes": ["error", "prefer-single"],

        "import/no-unresolved": "error",
        "import/named": "error",
        "import/default": "error",
        "import/namespace": "error",
        "import/no-absolute-path": "error",
        "import/no-dynamic-require": "error",

        "import/export": "error",
        "import/no-deprecated": "warn",
        "import/no-extraneous-dependencies": "error",
        "import/no-mutable-exports": "error",

        "import/first": "error",
        "import/no-duplicates": "error",
        "import/extensions": "error",
        "import/order": ["error", { "groups": ["external", "internal"] }],
        "import/newline-after-import": "error",
        "import/no-unassigned-import": "error"
    }
}

