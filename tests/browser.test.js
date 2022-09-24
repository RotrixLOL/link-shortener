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
        await page.goto('http://localhost:5173')
        await page.screenshot({ path: 'screenshot.png' })
        done()
    })

    afterAll(done => {
        await browser.close()
        done()
    })
})