exports.config = {

    specs: [
        '*Test.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances:1,

    capabilities: [{
        browserName: 'chrome'
    }],


//
    // ===================
    // Test Configurations
    // ===================

    logLevel: 'silent',

    coloredLogs: true,

    waitforTimeout: 5000,

    framework: 'mocha',

    mochaOps: {
        timeout: 5000
    },

    reporters: ['allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },

    sync: false,
    //

    onPrepare: function() {

    },

    before: function() {
        var titleVerify = require('./common/commonlib.js').verifyTitle(browser);
        return browser
            .windowHandleMaximize()
            .url('http://google.com')
    },

    after: function() {
        console.log('finish up the tests');
    },


    afterTest: function(result) {
        var ms = new Date().getTime();

        if(!result.passed){
            return browser.saveScreenshot('screenshots/'+ result.currentTest + ms +'.png')
        }

    },


    onComplete: function() {
        console.log('that\'s it');
    }
};