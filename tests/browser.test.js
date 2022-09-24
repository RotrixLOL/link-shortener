const puppeeter = require('puppeteer')

describe('Browser testing', () => {
    let browser
    let page

    beforeAll(() => {
        browser = puppeeter.launch()
        page = browser.newPage()
    })

    it('make a screenshot', () => {
        page.goto('http://localhost:5173')
        page.screenshot({ path: 'screenshot.png' })
    })

    afterAll(() => {
        browser.close()
    })
})