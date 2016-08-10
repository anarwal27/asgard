exports.config = {

    specs: [
        'src/pageObjects/*test.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances:1,

    capabilities: [
        {
            browserName: 'chrome'
        }
        // },{
        //     browserName: 'firefox'
        //   }
    ],

    // ===================
    // Test Configurations
    // ===================
    sync: true,

    services: ['selenium-standalone'],

    sync: true,

    // Set LogLevel: Verbose for more detailed logs
    logLevel: 'silent',

    // Enables colors for log output
    coloredLogs: true,

    // Default timeout for all waitForXXX commands.
    waitforTimeout: 30000,

    baseUrl: 'https://google.com',

    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // Test reporter for stdout.
    reporters: ['spec', 'allure', 'junit'],

    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        },   junit: {
            outputDir: './junitreports/'
        }
    },


    onPrepare: function() {

    },

    before: function() {
        var webdriverio = require('webdriverio'),
                   chai = require('chai');
                   expect=chai.expect;
                   moment=require('moment');
        browser.url('/');
        return browser.windowHandleMaximize();

       var addCommands = require('../src/common/addCommands').add;
       addCommands(browser);

       //import all assertion and selector files in before function as they will be used throughout project and through different files

       //as user needs to login to our application before performing any action, thus we provide login function in before function
    },

    beforeTest: function (test) {
       console.log("Test Case: "+ test.currentTest);
   },

    after: function(failures, pid) {
        console.log('finish up the tests');
    },

    afterTest: function(result) {
      if(!result.passed){
           console.log('Test Failed');
           return browser.saveScreenshot('errorShots/'+result.currentTest + moment().unix() +'.png')
       }else {
            console.log('Test Passed');
       }
    },

    onComplete: function() {
        console.log('Testing Done!');
    }
};
