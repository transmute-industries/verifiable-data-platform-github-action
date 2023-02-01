import oauthOperations from './operations/oauth';
import credentials from './operations/credentials';




const operations = {
  ...oauthOperations,
  ...credentials,
  /*notifyPresentationAvailable:  async ({organizationId, query}) => {
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
  },*/
}

const operationSwitch = async (env) => {
  if (operations[env.operationId]){
    return operations[env.operationId](env)
  }
  throw new Error('GitHub Action does not operation-id: ' + env.operationId)
}

export default operationSwitch