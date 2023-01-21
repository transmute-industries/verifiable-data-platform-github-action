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

    verifiableCredential: core.getInput("verifiable-credential"),
    credential: core.getInput("credential"),
    endpoint: core.getInput("endpoint"),
    query: core.getInput("query"),

    presentation: core.getInput("presentation"),
    domain: core.getInput("domain"),
    challenge: core.getInput("challenge"),
    contactId: core.getInput("contact-id"),
    organizationId: core.getInput("organization-id"),
  };
};

module.exports = getOpts;