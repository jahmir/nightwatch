module.exports = {
    'dropdown test': function (browser) {
        browser.url('http://tutorials.actionqa.com/yt/nw/basic/drop-down.html')
        // browser.setValue('#dropdown', 'Black')
        // browser.pause(2000)
        // browser.setValue('#dropdown', 'Black')
        // browser.pause(2000)

        // browser.click('#dropdown option:nth-child(4)')

        for (let index = 1; index <= 4; index++) {
            browser.click(`#dropdown option:nth-child(${index})`)
            browser.pause(2000)
        }

        browser.pause(2000)
        browser.end()
    }
}