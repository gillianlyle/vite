module.exports = {
    "plugins": ["vuejs-accessibility"],
    extends: [
      'plugin:vue/vue3-recommended',
      'plugin:vue/vue3-essential',
      "plugin:vuejs-accessibility/recommended"
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    }
  }