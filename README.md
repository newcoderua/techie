# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Using reactstrap
npm install bootstrap@4.0.0-beta.3 --save
npm i --save reactstrap@next
And also fix webpack.config.js a little (module: {
  loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(\_dirname, 'app')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
  ],
  resolve: {
      extensions: ['', '.js', '.jsx', '.css']
  }
})

To make it work I need to add import 'bootstrap/dist/css/bootstrap.css' to index.js;


* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
