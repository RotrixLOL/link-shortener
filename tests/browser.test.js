const puppeeter = require('puppeteer')

describe('Browser testing', () => {
    let browser
    let page

    beforeAll(done => {
        browser = await puppeeter.launch()
        page = await browser.newPage()
        done()
    })

    it('make a screenshot', done => {
        page.goto('http://localhost:5173')
        page.screenshot({ path: 'screenshot.png' })
        done()
    })

    afterAll(done => {
        browser.close()
        done()
    })
})