const createHttpServer = require('./serf/createHttpServer')
const createSocketServer = require('./serf/createSocketServer')

const getTest = require('./api/v0/tests/getTest')
const getTests = require('./api/v0/tests/getTests')
const getTestList = require('./api/v0/tests/getTestList')
const addTestToList = require('./api/v0/tests/addTestToList')

const start = async () => {
  const server = createHttpServer({
    port: 3001,
    routes: [
      getTest,
      getTests,
      getTestList,
      addTestToList,
      {
        method: 'get',
        match: '/',
        handler(context) {
          context.response.end('<html><body><h1>V1 Login</h1></body></html>')
        },
      },
    ],
    routePrefix: '/api/v0',
  })
}

module.exports = start
