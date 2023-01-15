
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
    process.env.verifiable_data_platform_access_token = fakeToken;
    // this would be a loop...
    // process.env.API_BASE_URL = env.apiBaseUrl;
    return fakeToken
  },
  getCredentials: async (env)=>{
    if (process.env.verifiable_data_platform_access_token === fakeToken){
      return {
        page: 0,
        count: 1,
        items: [ { id:'123' } ]
      }
    } else {
      return { message: 'token is not valid'}
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