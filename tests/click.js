module.exports = {
    'click the button': function (browser) {
        browser.url('http://tutorials.actionqa.com/yt/nw/basic/click.html')
        browser.click('#surprise-button')
        browser.pause(3000)
        browser.end()
    }
}