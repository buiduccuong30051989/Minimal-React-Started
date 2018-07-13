To dev: `npm install & npm start`
Check step by step config in commit history

1. Create:
    - src/index.js
    - .gitignored
    - index.html
2. `npm init`
3. `npm install -D webpack webpack-dev-server webpack-cli`
4. `webpack init` (first: `npm install -g webpack webpack-cli`) --> generate webpack.config.js
5. edit webpack.config.js
  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        },
        {
          test: /\.(scss|css)$/,

          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    mode: 'development'
  };
  ```
6. package.json
  ```javascript
    ...
    "scripts": {
      "start": "webpack-dev-server --config ./webpack.config.js",
      ...
    },
    ...
    "keywords": [],
    "author": "",
    "license": "ISC",
    "babel": {
      "presets": [
        "env",
        "stage-0"
      ]
    },
    "devDependencies": {
    ...
  ```
7. `npm install --save react react-dom`
8. `npm install -D react-hot-loader`
  src/index.js
  ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';

    const title = 'My Minimal React Webpack Babel Setup';

    ReactDOM.render(
      <div>{title}</div>,
      document.getElementById('app')
    );

    module.hot.accept();
  ```
  webpack.config.js
  ```javascript
  const webpack = require('webpack');

  module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        },
        {
          test: /\.(scss|css)$/,

          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    entry: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: __dirname + '/',
      hot: true
    },
    mode: 'development'
  };

  ```
  package.json
  ```javascript
  ...
  "babel": {
    "presets": [
      "env",
      "react",
      "stage-0"
    ]
  },
  ...
  ```