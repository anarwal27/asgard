/**
 * Created by anarwal on 2/4/17.
 */
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');
// Override docker specific config
exports.config = merge(wdioConf.config, {
    host: 'localhost',
    port: 4444,
    path: '/wd/hub'
});