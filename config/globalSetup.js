import { setup as setupDevServer } from 'jest-dev-server'

export default globalSetup = async () => {
    await setupDevServer({
        command: 'vite --host',
        launchTimeout: 10000,
        port: 5173
    })

    console.log('globalSetup was invoked')
}