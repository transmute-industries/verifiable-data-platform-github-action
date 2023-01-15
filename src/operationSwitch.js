
// const api = require('./transmute-api')

// const operations = {
//   getAccessToken: async (env)=>{
//     return api.token.get(env)
//   },
//   getCredentials: async (env)=>{
//     return api.credentials.get(env)
//   }
// }

const fakeToken = `header111.payload.signature`
const operations = {
  getAccessToken: async (env)=>{
    return fakeToken
  },
  getCredentials: async (env)=>{
    if (env.accessToken !== fakeToken){
      return []
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