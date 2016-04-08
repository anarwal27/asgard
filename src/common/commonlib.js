var webdriverio = require('webdriverio'),
    chai = require('chai');
    expect=chai.expect;
    obj = require('../test.json');

function verifyTitle(browser){
    browser.addCommand("getUrlAndTitle", function(customVar) {
        return this.url().then(function(urlResult) {
            return this.getTitle().then(function(titleResult) {
                console.log(customVar); // "a custom variable"
                return { url: urlResult.value, title: titleResult };
            });
        });
    });
}

module.exports = {
    verifyTitle: verifyTitle
};


//function verifySearch(){
//    return browser
//        .getTitle().then(function(title) {
//            expect(title).to.be.equal(obj.title);
//        })
//        .setValue(".//*[@id='gs_htif0']","webdriverIO")
//        .click(".//*[@id='sblsbb']/button");
//}
//
//module.exports = verifySearch;