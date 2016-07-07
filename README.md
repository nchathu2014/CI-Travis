![](https://s32.postimg.org/xsx2dwh39/react.png?raw=true)
![](https://s31.postimg.org/6pa2thz2j/jest.png?raw=true)
![](https://s32.postimg.org/rwpuruyol/travis_ci.png?raw=true)

# Continues Integration with Travis CI
Travis CI is a continues integration testing environment for Github projects.This will make indertanding about the process and how CI javascript (ES6) projects

### Prerequiests
  - NodeJS (^ v6.2.0) (https://nodejs.org/)
  - Travis CI account (https://travis-ci.org)

### Testing dependencies
  **jest-cli** : unit testing for javascript/ReactJS (extended from jasmine)

### Configuration
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

### Travis settinigs

Active the git project in **Travis CI** environment

![](https://s32.postimg.org/qc8j6oied/image.png?raw=true)

### Output
![](https://s31.postimg.org/uf6v47j17/ci_1.png?raw=true)
