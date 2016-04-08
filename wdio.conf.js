exports.config = {

    specs: [
        'src/pageObjects/*test.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances:1,

    capabilities: [{
            browserName: 'chrome'
        },
        //{
        //    browserName: 'internet explorer'
        //},
        {
            browserName: 'firefox'
    }],

    // ===================
    // Test Configurations
    // ===================

    services: ['selenium-standalone'],

    sync: true,
    //
    logLevel: 'silent',
    //
    // Enables colors for log output
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: '../errorShots/',
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
        return browser.windowHandleMaximize()
    },

    after: function(failures, pid) {
        console.log('finish up the tests');
    },

    afterTest: function(result) {
        if(!result.passed){
            return browser.saveScreenshot(result.currentTest + moment().unix() +'.png')
        }
    },

    onComplete: function() {
        console.log('that\'s it');
    }
};