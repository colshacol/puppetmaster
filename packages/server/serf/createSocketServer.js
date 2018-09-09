const http = require('http')

const createSocketServer = (options) => {
  const server = http.createServer()

  server.listen(options.port, (error) => {
    if (error) throw error

    console.log(`Listening @ http://localhost:${options.port}`)
  })
}

module.exports = createSocketServer
