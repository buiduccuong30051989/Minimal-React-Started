1. npm init -y
2. cd minimal / touch index.html
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>The Minimal React Webpack Babel Setup</title>
    </head>
    <body>
      <div id="app"></div>
      <script src="/bundle.js"></script>
    </body>
  </html>
  ```
3. `npm install -D webpack webpack-dev-server webpack-cli`
  ```
  //Folder Structure:
  - dist
  -- index.html
  - node_modules
  - package.json
  ```
4. From root folder:
  `touch webpack.config.js`
  or you can: `webpack init`
  it will give you some choice:
  - ? Will you be creating multiple bundles?
  - ? Which module will be the first to enter the application? ./src/index.js
  - ? Which folder will your generated bundles be in? [default: dist]:
  - ? Are you going to use this in production?
  - ? Will you be using ES2015?
  - ? Will you use one of the below CSS solutions? CSS
  - ? If you want to bundle your CSS files, what will you name the bundle? (press en
ter to skip)
  - ? Name your 'webpack.[name].js?' [default: 'prod']: config
5. package.json
  ```javascript
    "scripts": {
      "start": "webpack-dev-server --config ./webpack.config.js --mode development",
      ...
    },
  ```
6.  