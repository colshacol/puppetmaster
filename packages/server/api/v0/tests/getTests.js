const getTests = {
  method: 'get',
  match: '/getTests',
  handler(context) {
    return {
      tests: 99,
    }
  },
}

module.exports = getTests
