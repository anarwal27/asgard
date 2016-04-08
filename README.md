# asgard.js
A UI Test Framework

Webdriver IO Tests
=========================

This example is based on:
https://github.com/onewiththehammer/web-driver-io-tutorial-git


## Todo
* Research and add functional tests using Webdriver IO


### Setup

```
npm install
```

### Building And Running

npm test or gulp test

**NOTE** the above command with start selenium server and run tests, if not follow the steps below

#### Selenium-Standalone Server

**Warning:** Make sure that your csos-ui server and Selenium-standalone server is running before running tests, use the following command to start standalone server
```
selenium-standalone start
```

### Running Tests
Use the following command to run tests
```
mocha pageTest.js
```

