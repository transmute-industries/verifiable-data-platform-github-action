import oauthOperations from './operations/oauth';
import credentials from './operations/credentials';
import workflowDefintions from './operations/workflowDefintions';
import workflowInstances from './operations/workflowInstances';

const operations = {
  ...oauthOperations,
  ...credentials,
  ...workflowDefintions,
  ...workflowInstances,
}

const operationSwitch = async (env) => {
  if (operations[env.operationId]){
    return operations[env.operationId](env)
  }
  throw new Error('GitHub Action does not operation-id: ' + env.operationId)
}

export default operationSwitch