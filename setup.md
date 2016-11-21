npm init
npm install -save es6-module-loader traceur
npm install -save-dev lite-server
npm run dev
// eslint --init

{
  "name": "name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "lite-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "es6-module-loader": "^0.17.11",
    "traceur": "0.0.111"
  },
  "devDependencies": {
    "lite-server": "^2.2.2"
  }
}