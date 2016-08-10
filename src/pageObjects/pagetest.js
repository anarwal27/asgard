var objData = require('../resources/assertions/testData.json');
var objSelector = require('../resources/selectors/testSelector.json');

describe('Sample Test', function() {

    //verify page title
    it('testForTitle', function(){
        var title = browser.getTitle();
        expect(title).to.be.equal(objData.page.title);
    });
    
    //Search something in Google

    //this needs to be fixed yet
    
    // it('searchGoogle', function(){
    //     browser.pause(5000);
    //     browser.setValue(objSelector.selectors.searchText, "Search");
    //     browser.waitForVisibleAndClick(objSelector.selectors.searchValue);
    // });

});
