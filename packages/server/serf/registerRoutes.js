const Router = require('router')
const compression = require('compression')
const bodyParser = require('body-parser')

const withCustomContext = (handler) => (request, response) => {
  return handler({ request, response })
}

const registerRoute = (router, options) => ({ method, match, handler }) => {
  const path = `${options.routePrefix}${match}`
  console.log(method, path)
  router[method](path, withCustomContext(handler))
}

const createRouter = () => {
  return Router({
    strict: true,
    caseSensitive: true,
  })
}

const applyMiddleware = (router) => {
  router.use(compression())
  router.use(bodyParser.json())
}

const registerRoutes = (options) => {
  const router = createRouter()
  options.routes.forEach(registerRoute(router, options))
  applyMiddleware(router)
  return router
}

module.exports = registerRoutes
