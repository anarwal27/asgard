var common=require("./../common/commonlib.js");

describe('Test Samples', function() {

    //verify page object creation
    it('should load correct Login page and title', function () {
        browser.getUrlAndTitle('a custom variable',function(err,result){
                assert.equal(null, err);
                assert.strictEqual(result.url,'https://google.com/');
                assert.strictEqual(result.title,'Google');
            })
    });

});