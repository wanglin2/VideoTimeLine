const { defineConfig } = require('@vue/cli-service')
const isDev = process.env.NODE_ENV === 'development'
module.exports = defineConfig({
  publicPath: isDev ? '' : './dist',
  outputDir: '../dist',
  transpileDependencies: true,
  lintOnSave: false
})
