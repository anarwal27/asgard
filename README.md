# AGARDS.JS

Sample Webdriver IO project for develoeprs to get started with Webdriver IO, also can be used as a skeleton. 

This project includes a node server that developers can use to easily run the application.

### Setup
```
npm install
```

### Browser and Configurations
To change configurations of project for your system,Please use 
```
ui-automation/config/-->wdio-cm.js
```
*Under specs, provide the files to be executed

*Under capabilities, provide the browser capabilities

### Execute Tests

To run all tests:
```
npm test
```

### Generate Reports 

To generate and open allure test reports
```
npm run report
```

**NOTE**
 You can delete the new allure folder everytime before running tests if you want to see fresh exection report while running locally. On jenkins, jenkins takes
 care of clearing workspace before starting execution.
