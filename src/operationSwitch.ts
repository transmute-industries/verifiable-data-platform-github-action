import * as core from '@actions/core';
import { Api } from './vdp';

const axiosConfig = {
  baseURL: process.env.API_BASE_URL
}
const api = new Api({ ...axiosConfig });

let oauthToken;

const generateHeaders = () => {
  const headers = {
    'Authorization': `Bearer ${oauthToken.access_token}`
  }
  return headers;
}

const operations = {
  getAccessToken: async (env) => {
    const { data: token } = await api.oauth.tokenCreate({
      grant_type: 'client_credentials',
      client_id: env.clientId,
      client_secret: env.clientSecret,
      audience: env.tokenAudience
    });
    oauthToken = token
    core.exportVariable("verifiable_data_platform_access_token", token.access_token)
    return null;
  },
  getCredentials: async () => {
    const headers = generateHeaders()
    const { data: response } = await api.credentials.getCredentials({ headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  storeCredential:  async ({verifiableCredential}) => {
    const headers = generateHeaders()
    const { data: response } = await api.credentials.createCredential(JSON.parse(verifiableCredential), { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  issueCredential:  async ({credential, options = {
    "type": "Ed25519Signature2018",
    "created": new Date().toISOString()
  }}) => {
    const headers = generateHeaders()
    const { data: response } = await api.credentials.issueCredential({ credential: JSON.parse(credential), options: options as any }, { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  notifyPresentationAvailable:  async ({organizationId, query}) => {
    const headers = generateHeaders()
    const { data: response } = await api.organizations.notifyPresentationAvailable(organizationId, { query: JSON.parse(query) }, { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  provePresentation:  async ({presentation, options }) => {
    const headers = generateHeaders()
    const { data: response } = await api.presentations.provePresentation({ presentation: JSON.parse(presentation), options: JSON.parse(options) }, { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
  submitDidAuthPresentationToContact:  async ({ presentation, contactId }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const headers = generateHeaders()
    const { data: response } = await api.presentations.sendDidAuthPresentation({ contactId, presentation: JSON.parse(presentation)}, { headers })
    console.log(response)
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
  },
}

const operationSwitch = async (env) => {
  if (operations[env.operationId]){
    return operations[env.operationId](env)
  }
  throw new Error('GitHub Action does not operation-id: ' + env.operationId)
}

export default operationSwitch