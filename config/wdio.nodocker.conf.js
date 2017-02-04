/**
 * Created by anarwal on 2/4/17.
 */
var merge = require('deepmerge');
var wdioConf = require('./wdio-conf.js');
// Override docker specific config
exports.config = merge(wdioConf.config, {
    services: ['selenium-standalone'],
    seleniumArgs: { version: '3.0.1' },
    seleniumLogs: 'selenium.log',
    seleniumInstallArgs: { version: '3.0.1' }
});
console.log(JSON.stringify(exports.config))