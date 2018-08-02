const packageJson = {
  "name": "go-with-the-flow",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src/ -d lib/",
    "test": "echo \"Error: no test specified\" && exit 1",
    "flow": "flow"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-flow": "^6.23.0",
    "flow-bin": "^0.77.0"
  }
};

console.log(JSON.stringify(packageJson));