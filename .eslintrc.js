module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
        amd: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin的推荐配置
        'plugin:vue/recommended', // eslint-plugin-vue的推荐配置
        'plugin:prettier/recommended', // eslint-plugin-prettier的推荐配置
        'prettier', // prettier 配置
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'vue-eslint-parser', // eslint-plugin-vue插件的parser
    parserOptions: {
        parser: '@typescript-eslint/parser', // @typescript-eslint/parser插件
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'vue', // eslint-plugin-vue推荐的插件写法
        '@typescript-eslint', // @typescript-eslint/parser
        'prettier', // eslint-plugin-prettier的推荐配置
    ],
    rules: {
        indent: ['error', 4],
        // quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'prettier/prettier': 2, // 注释掉，只是不报错。但不会自动修复
        'no-console': 'error',
        'arrow-parens': 0,
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 2,
                    allowFirstLine: true,
                },
                multiline: {
                    max: 4,
                    allowFirstLine: true,
                },
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
    },
};
