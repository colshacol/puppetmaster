const getTestList = {
  method: 'get',
  match: '/getTestList',
  handler(context) {
    return {
      tests: 99,
    }
  },
}

module.exports = getTestList
