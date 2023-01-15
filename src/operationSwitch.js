const core = require("@actions/core");
const vdp = require('./vdp')

const operations = {
  getAccessToken: async (env) => {
    const token = await vdp.token.get(env);
    core.exportVariable("verifiable_data_platform_access_token", token)
    core.exportVariable("verifiable_data_platform_url", env.apiBaseUrl)
    return null;
  },
  getCredentials: async () => {
    const apiBaseUrl = process.env.verifiable_data_platform_url;
    const accessToken = process.env.verifiable_data_platform_access_token;
    const response = await vdp.credentials.get({apiBaseUrl, accessToken})
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  storeCredential:  async ({verifiableCredential}) => {
    const apiBaseUrl = process.env.verifiable_data_platform_url;
    const accessToken = process.env.verifiable_data_platform_access_token;
    const response = await vdp.credentials.store({apiBaseUrl, accessToken, verifiableCredential: JSON.parse(verifiableCredential)})
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  }
}

// TODO: use proper mocking...
// const fakeToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
// const operations = {
//   getAccessToken: async (env)=>{
//     process.env.verifiable_data_platform_access_token = fakeToken;
//     // this would be a loop...
//     // process.env.API_BASE_URL = env.apiBaseUrl;
//     return fakeToken
//   },
//   getCredentials: async (env)=>{
//     if (process.env.verifiable_data_platform_access_token === fakeToken){
//       return {
//         page: 0,
//         count: 1,
//         items: [ { id:'123' } ]
//       }
//     } else {
//       return { message: 'token is not valid'}
//     }
//   }
// }

const operationSwitch = async (env) => {
  if (operations[env.operationId]){
    return operations[env.operationId](env)
  }
  throw new Error('GitHub Action does not operation-id: ' + env.operationId)
}

module.exports = operationSwitch