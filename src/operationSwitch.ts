import oauthOperations from './operations/oauth';
import credentials from './operations/credentials';
import workflowDefintions from './operations/workflowDefintions';



const operations = {
  ...oauthOperations,
  ...credentials,
  ...workflowDefintions,
}

const operationSwitch = async (env) => {
  if (operations[env.operationId]){
    return operations[env.operationId](env)
  }
  throw new Error('GitHub Action does not operation-id: ' + env.operationId)
}

export default operationSwitch