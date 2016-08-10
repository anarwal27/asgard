/*User can create there custom actions which they want to perform, once created here and imported in wdio-config file,
  these custom actions can be used with 'browser' command as in-built functions.*/

function add(browser){

    // Method: waitForExist and click after specified or default timeout
    browser.addCommand('waitAndClick', function(element, timeout) {
        browser.waitForExist(element, timeout || waitTime);
        browser.click(element);
    });

    // Method: waitForVisible and click after specified or default timeout
    browser.addCommand('waitForVisibleAndClick', function(element, timeout) {
        browser.waitForVisible(element, timeout || waitTime);
        browser.click(element);
    });

    // Method: verifyRefreshButton
    browser.addCommand('verifyRefreshButton', function() {
        var refreshButton = browser.isExisting(pageDesignSelectors.pageTemplate.refreshButton);
        expect(refreshButton).to.be.true;
    });

  }
module.exports = {
  add: add
};
