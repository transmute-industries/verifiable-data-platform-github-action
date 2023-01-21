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
  },
  issueCredential:  async ({credential}) => {
    const apiBaseUrl = process.env.verifiable_data_platform_url;
    const accessToken = process.env.verifiable_data_platform_access_token;
    const response = await vdp.credentials.issue({apiBaseUrl, accessToken, credential: JSON.parse(credential)})
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  notifyPresentationAvailable:  async ({endpoint, query}) => {
    const response = await vdp.presentations.available({endpoint, query: JSON.parse(query)})
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  provePresentation:  async ({presentation, domain, challenge}) => {
    const apiBaseUrl = process.env.verifiable_data_platform_url;
    const accessToken = process.env.verifiable_data_platform_access_token;
    const response = await vdp.presentations.prove({apiBaseUrl, accessToken, presentation: JSON.parse(presentation), domain, challenge})
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  sendTo:  async ({contactId, presentation }) => {
    const apiBaseUrl = process.env.verifiable_data_platform_url;
    const accessToken = process.env.verifiable_data_platform_access_token;
    const response = await vdp.presentations.sendTo({apiBaseUrl, accessToken, contactId, presentation: JSON.parse(presentation)})
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  submitPresentationWithOAuth2Security:  async ({did, presentation }) => {
    const [_0, _1, _2, _3, organizationId] = did.split(':')
    const apiBaseUrl = process.env.verifiable_data_platform_url;
    const accessToken = process.env.verifiable_data_platform_access_token;
    const response = await vdp.presentations.submit({apiBaseUrl, accessToken, organizationId, presentation: JSON.parse(presentation)})
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
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