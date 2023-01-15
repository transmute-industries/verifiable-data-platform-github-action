
// const api = require('./transmute-api')

// const operations = {
//   getAccessToken: async (env)=>{
//     return api.token.get(env)
//   },
//   getCredentials: async (env)=>{
//     return api.credentials.get(env)
//   }
// }

const fakeToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

const operations = {
  getAccessToken: async (env)=>{
    return fakeToken
  },
  getCredentials: async (env)=>{
    if (env.accessToken !== fakeToken){
      return ['invalid-fake-token' + fakeToken]
    }
    return {
      page: 0,
      count: 1,
      items: [ { id:'123' } ]
    }
  }
}

const operationSwitch = async (env) => {
  if (operations[env.operationId]){
    return operations[env.operationId](env)
  }
 throw new Error('GitHub Action does not operation-id: ' + env.operationId)
}

module.exports = operationSwitch