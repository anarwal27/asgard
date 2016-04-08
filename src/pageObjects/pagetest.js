var obj = require('../resources/test.json');

describe('Test Samples', function() {

    //verify page object creation
    it('test for sample', function(){

        var title = browser.getTitle();
        expect(title).to.be.equal(obj.title);
    });


    //it('should load correct Login page and title', function () {
    //    browser.getUrlAndTitle('a custom variable',function(err,result){
    //            assert.equal(null, err);
    //            assert.strictEqual(result.url,'https://google.com/');
    //            assert.strictEqual(result.title,'Google');
    //        })
    //});

});