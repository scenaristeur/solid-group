const publicPath = process.env.NODE_ENV === 'production' ? '/solid-group/' : '/'


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   publicPath: publicPath,
  transpileDependencies: true
})
