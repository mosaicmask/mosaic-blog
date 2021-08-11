module.exports = {
  root: true,
  // 环境
  env: {
    browser: true,
    node: true,
  },
  //插件
  plugins: [
    'vue',
    'html', // 插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
  ],
  //解析器选项
  parserOptions: {
    ecmaVersion: 2020,
  },
  //规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  //插件
  extends: [
    '@vue/prettier/@typescript-eslint',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
}
