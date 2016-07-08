![](https://s32.postimg.org/xsx2dwh39/react.png?raw=true)
![](https://s31.postimg.org/6pa2thz2j/jest.png?raw=true)
![](https://s32.postimg.org/rwpuruyol/travis_ci.png?raw=true)

# Continues Integration with Travis CI 
![Build Status](https://travis-ci.org/nchathu2014/CI-Travis.svg?branch=master) [![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/) 

Travis CI is a continues integration testing environment for Github projects.This explain about the process and how CI works with ReactJS and Jest

### Prerequiests
  - NodeJS (^ v6.2.0) (https://nodejs.org/)
  - Travis CI account (https://travis-ci.org)

### Testing dependencies
  **jest-cli** : unit testing for javascript/ReactJS (extended from jasmine)

### Configuration

Test without code coverage change the **"collectCoverage"**:false
* **package.json** :<br/>
   "jest": {<br/>
    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest<br/>
    "testFileExtensions": [
      "es6",
      "js"],
<br/>
    "moduleFileExtensions": [
      "es6",
      "js"
    ],<br/>
    "collectCoverage": true<br/>
  }

### Installation
```sh
$ npm install
```
### Run/Test

To run the project 
```sh
$ npm run start
http://localhost:8080/webpack-dev-server/
```

To test the project locally 
```sh
$ npm run test
```

### Travis settings

Active the git project in **Travis CI** environment

![](https://s32.postimg.org/qc8j6oied/image.png?raw=true)

### Output
![](https://s31.postimg.org/uf6v47j17/ci_1.png?raw=true)
