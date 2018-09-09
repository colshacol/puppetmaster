const http = require('http')
const finalhandler = require('finalhandler')
const registerRoutes = require('./registerRoutes')

const createHttpServer = (options) => {
  const route = registerRoutes(options)

  const server = http.createServer((request, response) => {
    console.log('got a request', request.url)
    route(request, response, finalhandler(request, response))
  })

  server.listen(options.port, (error) => {
    if (error) throw error
    console.log(`Listening @ http://localhost:${options.port}`)
  })

  server.on('error', (error) => {
    console.error(error)
  })
}

module.exports = createHttpServer
