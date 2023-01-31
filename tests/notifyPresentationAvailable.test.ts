import operationSwitch from "../src/operationSwitch";

describe("notifyPresentationAvailable", () => {
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
  it("notifyPresentationAvailable", async () => {
    expect(process.env.verifiable_data_platform_api_response).toBeUndefined()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_0, _1, _2, _3, organizationId] = process.env.ORGANIZATION_DID_WEB.split(':')
    await operationSwitch({
      operationId: 'notifyPresentationAvailable',
      organizationId: organizationId,
      query: `${JSON.stringify([
        {
          "type": "QueryByExample",
          "credentialQuery": [
            {
              "type": [
                "VerifiableCredential"
              ],
              "reason": "We want to present credentials."
            }
          ]
        }
      ], null, 2)}`
    });
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.domain).toBeDefined()
    expect(parsed.challenge).toBeDefined()
  });
});
