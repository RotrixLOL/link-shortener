const { setup: setupDevServer } = require('jest-dev-server')

module.exports = async function globalSetp() {
    await setupDevServer({
        command: 'vite --host',
        launchTimeout: 10000,
        port: 5173
    })

    console.log('globalSetup was invoked')
}