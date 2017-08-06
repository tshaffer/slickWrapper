module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: 'slickwrapper/',
    path: __dirname + '/dist',
    libraryTarget: 'umd',
    library: 'slickwrapper',
    filename: 'slickwrapper.js'
  },
  devtool: 'source-map',
  target: 'electron', // ??

  externals: {
    'core-js/fn/object/assign' : 'commonjs core-js/fn/object/assign',
    'core-js/fn/array/from' : 'commonjs core-js/fn/array/from',
    'core-js/es6/set' : 'commonjs core-js/es6/set',
    'core-js/es6/promise' : 'commonjs core-js/es6/promise',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ],
  }
}
