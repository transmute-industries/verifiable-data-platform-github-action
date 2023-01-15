const core = require("@actions/core");

const operationSwitch = require("./src");

const getOpts = () => {
  return {
    operationId: core.getInput("operation-id"),
    accessToken: core.getInput("access-token"),
    // from .env
    did: core.getInput("did"),
    tokenEndpoint: core.getInput("token-endpoint"),
    tokenAudience: core.getInput("token-audience"),
    apiBaseUrl: core.getInput("api-base-url"),
    clientId: core.getInput("client-id"),
    clientSecret: core.getInput("client-secret"),
  };
};

async function run() {
  try {
    const opts = getOpts();
    const response = await operationSwitch(opts);
    // TODO: consider security issues with this approach...
    // The action should probably only export masked variables...
    if (opts.operationId !== 'getAccessToken'){
      core.setOutput("json", JSON.stringify(response));
    } else {
      core.exportVariable("access_token", response)
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
