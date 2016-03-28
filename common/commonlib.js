var webdriverio = require('webdriverio'),
    chai = require('chai');
    expect=chai.expect;
    obj = require('../test.json');

function verifyTitle(browser){
    browser.addCommand(titleVerify,function(){
        return this
            .getTitle().then(function(title) {
                expect(title).to.be.equal(obj.title);
            })
    })
}


module.exports = {
    verifyTitle: verifyTitle
};


function verifySearch(){
    return browser
        .getTitle().then(function(title) {
            expect(title).to.be.equal(obj.title);
        })
        .setValue(".//*[@id='gs_htif0']","webdriverIO")
        .click(".//*[@id='sblsbb']/button");
}

module.exports = verifySearch;