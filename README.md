# Continues Integration with Travis CI
Travis CI is a continues integration testing environment for Github projects.This will make indertanding about the process and how CI javascript (ES6) projects

### Prerequiests
  - NodeJS (^ v6.2.0) (https://nodejs.org/)
  - Travis CI account (https://travis-ci.org)

### Testing dependencies
  **jest-cli** : unit testing for javascript/ReactJS (extended fro jasmine)

### Configuration
* **package.json** :
   "jest": {\
    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",\
    "testFileExtensions": [
      "es6",
      "js"
    ],\
    "moduleFileExtensions": [
      "es6",
      "js"
    ],\
    "collectCoverage": true
  }

### Intallation
```sh
$ npm install
```

### Travis settinigs

Active the git project in **Travis CI** environment

![](https://s32.postimg.org/qc8j6oied/image.png?raw=true)

### Output
![](https://s31.postimg.org/uf6v47j17/ci_1.png?raw=true)
