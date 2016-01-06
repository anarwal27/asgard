exports.config = {

 /*   user: 'anarwal',
    key: '66dd5499-7a80-4fcf-b2c7-54d093f99d76',
    host: 'ondemand.saucelabs.com',
    port: 80,*/
    specs: [
        'test/csosTest.js'
    ],
    recordVideo: 'false',
    recordScreenshots: 'false',
    specs: [
        'csosTest.js'
    ],

    capabilities: [{
        browserName: 'chrome'
        //version: '42.0',
        //platform: 'Windows 8',
        //name: 'Sample test on google'
    },
    //    {
    //    browserName: 'firefox',
    //    version: '42',
    //    platform: 'Windows 10',
    //    name:'asgard sample google test',
    //    "build": "build-1234"
    //},
        //{
        //    browserName: 'safari',
        //    version: '8.0',
        //    platform: 'OS X 10.10',
        //    name: 'sample test on safari'
        //}
    ],


//
    // ===================
    // Test Configurations
    // ===================

    logLevel: 'silent',

    coloredLogs: true,

    waitforTimeout: 1000,

    framework: 'mocha',

    reporter: 'spec',
    //

    onPrepare: function() {

    },

    before: function() {

    },

    after: function(failures, pid) {
        console.log('finish up the tests');
    },



    onComplete: function() {
        console.log('that\'s it');
    }
};