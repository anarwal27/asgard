exports.config = {

    specs: [
        'src/pageObjects/pagetest.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances:1,

    capabilities: [
        {
            browserName: 'chrome'
        },
            {
            browserName: 'firefox'
    }
    ],

    // ===================
    // Test Configurations
    // ===================

    sync: true,
    //
    logLevel: 'silent',
    //
    // Enables colors for log output
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
   // screenshotPath: '',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 30000,

    baseUrl: 'https://google.com',

    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // Test reporter for stdout.
    reporters: ['dot', 'allure'],

    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
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
        return browser.windowHandleMaximize()
    },

    after: function(failures, pid) {
        console.log('finish up the tests');
    },

    afterTest: function(result) {
        if(!result.passed){
            return browser.saveScreenshot("../errorShots/shot"+result.currentTest + moment().unix() +'.png')
        }
    },

    onComplete: function() {
        console.log('that\'s it');
    }
};