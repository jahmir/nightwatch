module.exports = {
    'set and clear text': function (browser) {
        browser.url('http://tutorials.actionqa.com/yt/nw/basic/text-input.html')
        browser.setValue('#text-input', 'Nightwatch is cool')
        browser.pause(2000);

        browser.clearValue('#text-input');
        browser.pause(2000)
        browser.end()
    }
}