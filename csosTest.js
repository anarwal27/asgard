var chai = require('chai'),
    expect = chai.expect,
    obj = require('./test.json');

describe('Test for CSOS UI', function() {
    it('should load correct Login page and title', function () {
        return browser
            .windowHandleMaximize()
            .url('http://google.com')
            .pause(1000)
            //.getTitle().then( function (title) {
        //        expect(title).to.be.equal(obj.title);
        //    })
            .saveScreenshot('./screenshots/shot23.png')
            .setValue(".//*[@id='gs_htif0']", WebdriverIO)
            .click(".//*[@id='sblsbb']/button")
            .end();
    });
});