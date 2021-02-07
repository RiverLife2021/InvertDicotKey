const exec = require('child_process').exec

module.exports = {
  // FIXME: Change to final subdir when installing
  publicPath: '/dikey/',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      {
        // Build images.json in public/ when webpack runs
        apply: (compiler) => {
          compiler.hooks.environment.tap('imagesPlugin', (compilation) => {
            exec('node makeImages.js', (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout)
              if (stderr) process.stderr.write(stderr)
            })
          })
        }
      }
    ],
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    }, 
  },
}
