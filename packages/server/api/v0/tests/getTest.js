const getTest = {
  method: 'get',
  match: '/getTest',
  handler(context) {
    context.response.setHeader('Content-Type', 'application/json; charset=utf-8')
    context.response.end(JSON.stringify({ test: { name: 'tommy boy' } }))
  },
}

module.exports = getTest
