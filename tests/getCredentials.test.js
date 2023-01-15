const operationSwitch = require('../src');


let accessToken = ''

beforeAll(async ()=>{
  accessToken = await operationSwitch({
    operationId: 'getAccessToken',
    did: process.env.ORGANIZATION_DID_WEB,
    tokenEndpoint: process.env.TOKEN_ENDPOINT,
    tokenAudience: process.env.TOKEN_AUDIENCE,
    apiBaseUrl: process.env.API_BASE_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });
})

describe("getCredentials", () => {
  it("get all credentials", async () => {
    const response = await operationSwitch({
      operationId: 'getCredentials',
      accessToken,
      apiBaseUrl: process.env.API_BASE_URL,
    });
    expect(response.page).toBeDefined();
    expect(response.count).toBeDefined();
    expect(response.items).toBeDefined();
    // console.log(response)
  });
});
