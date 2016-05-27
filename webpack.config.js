module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    root: __dirname,
    alias: {
      Main: 'app/components/main/Main.jsx',
      Nav: 'app/components/nav/Nav.jsx',
      Home: 'app/components/home/Home.jsx',
      Projects: 'app/components/projects/Projects.jsx',
      About: 'app/components/about/About.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
