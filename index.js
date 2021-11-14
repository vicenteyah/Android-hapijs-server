const routes = require('./routes')
const Hapi = require('hapi')
require('dotenv').config()

const server = Hapi.server({
    port: process.env.APP_PORT || 3000,
    host: process.env.APP_HOST || 'localhost',
    routes: {
        cors: true
    }
})

server.route(routes)

const init = async () => {
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()