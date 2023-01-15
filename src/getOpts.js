const core = require("@actions/core");

const getOpts = () => {
  return {
    operationId: core.getInput("operation-id"),
    // from .env
    did: core.getInput("did"),
    tokenEndpoint: core.getInput("token-endpoint"),
    tokenAudience: core.getInput("token-audience"),
    apiBaseUrl: core.getInput("api-base-url"),
    clientId: core.getInput("client-id"),
    clientSecret: core.getInput("client-secret"),
  };
};

module.exports = getOpts;