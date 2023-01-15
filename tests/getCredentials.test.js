const operationSwitch = require('../src/operationSwitch');

describe("getCredentials", () => {
  beforeAll(async ()=>{
    await operationSwitch({
      operationId: 'getAccessToken',
      did: process.env.ORGANIZATION_DID_WEB,
      tokenEndpoint: process.env.TOKEN_ENDPOINT,
      tokenAudience: process.env.TOKEN_AUDIENCE,
      apiBaseUrl: process.env.API_BASE_URL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });
  })
  it("get all credentials", async () => {
    expect(process.env.verifiable_data_platform_api_response).toBeUndefined()
    await operationSwitch({
      operationId: 'getCredentials',
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
  });
});
