var webdriverio = require('webdriverio'),
    chai = require('chai'),
    expect = chai.expect;
var common=require("./common/commonlib.js");

describe('Test for CSOS UI', function() {

    //verify page object creation
    it('should load correct Login page and title', function () {
        return browser
            .titleVerify();
    });

    it('verify search function', function(){
        common.verifySearch();
    })
});