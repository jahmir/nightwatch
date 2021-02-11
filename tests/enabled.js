module.exports = {
    'Enabled Test': function (browser) {
        browser.url('http://tutorials.actionqa.com/yt/nw/asserts/enabled.html')
        //browser.assert.attributeEquals('#am-i-disabled', 'disabled', 'true')
        browser.expect.element('#am-i-disabled').not.to.be.enabled
        browser.setValue('#type-to-enable', 'enabled!')
        browser.pause(2000)
        //browser.assert.attributeEquals('#am-i-disabled', 'disabled', 'false')
        browser.expect.element('#am-i-disabled').to.be.enabled
    }
}