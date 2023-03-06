import oauthOperations from './operations/oauth';
import credentials from './operations/credentials';
import workflowDefintions from './operations/workflowDefintions';
import workflowInstances from './operations/workflowInstances';
import interoperability from './operations/interoperability';
import presentations from './operations/presentations';

const operations: any = {
  ...oauthOperations,
  ...credentials,
  ...workflowDefintions,
  ...workflowInstances,
  ...interoperability,
  ...presentations,
}

const operationSwitch = async (env: any) => {
  if (operations[env.operationId as string]){
    return operations[env.operationId as string](env)
  }
  throw new Error('GitHub Action does not operation-id: ' + env.operationId)
}

export default operationSwitch