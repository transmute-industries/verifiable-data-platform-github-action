/* eslint-disable @typescript-eslint/no-non-null-assertion */
import operationSwitch from "../src/operationSwitch";

jest.setTimeout( 1 * 60 * 1000);

describe("Credential Tests", () => {
  beforeAll(async ()=> {
    await operationSwitch({
      operationId: 'tokenCreate',
      did: process.env.ORGANIZATION_DID_WEB,
      tokenEndpoint: process.env.TOKEN_ENDPOINT,
      tokenAudience: process.env.TOKEN_AUDIENCE,
      apiBaseUrl: process.env.API_BASE_URL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });
  })
  let credentialToStore = {};
  it("issueCredential", async () => {
    await operationSwitch({
      operationId: 'issueCredential',
      credential: `${JSON.stringify({
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://ref.gs1.org/gs1/vc/licence-context/",
          "https://w3id.org/vc-revocation-list-2020/v1"
        ],
        "id": "did:example:60cda318-a0a7-4e39-b600-ea38bf68a31f",
        "type": [
          "VerifiableCredential",
          "GS1KeyCredential"
        ],
        "issuer": process.env.ORGANIZATION_DID_WEB,
        "issuanceDate": "2020-12-02T09:48:11Z",
        "credentialSubject": {
          "id": "https://id.gs1.org/01/07541234555551",
          "extendsCredential": "did:example:b6d13abe-464d-4bb9-a568-b6d81efd57e3"
        },
      }, null, 2)}`,
      options: `${JSON.stringify({
        "type": "Ed25519Signature2018",
        "created": new Date().toISOString(),
        "credentialStatus": { "type": 'RevocationList2020Status' }
      })}`
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response!);
    credentialToStore = parsed.verifiableCredential;
    expect(parsed.verifiableCredential.proof).toBeDefined();
  });

  it("getCredentials", async () => {
    await operationSwitch({
      operationId: 'getCredentials',
    });
    // expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    // const parsed = JSON.parse(process.env.verifiable_data_platform_api_response!);
    // expect(parsed.items).toBeDefined();
  });
  let credentialToDelete = '';
  it("createCredential", async () => {
    await operationSwitch({
      operationId: 'createCredential',
      verifiableCredential: `${JSON.stringify(credentialToStore, null, 2)}`
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response!);
    expect(parsed.verifiableCredential).toBeDefined();
    credentialToDelete = parsed.id;
  });

  it("getCredential", async () => {
    await operationSwitch({
      operationId: 'getCredential',
      credentialId: credentialToDelete
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response!);
    expect(parsed.verifiableCredential).toBeDefined();
  });

  it("verifyCredential", async () => {
    await operationSwitch({
      operationId: 'verifyCredential',
      credentialId: credentialToDelete
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response!);
    expect(parsed.verified).toBe(true);
  });

  it("updateCredentialStatus2", async () => {
    await operationSwitch({
      operationId: 'updateCredentialStatus2',
      credentialId: credentialToDelete,
      revoked: true
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response!);
    expect(parsed.revoked).toBe(true);
  });

  it("changeCredentialVisibility", async () => {
    await operationSwitch({
      operationId: 'changeCredentialVisibility',
      credentialId: credentialToDelete,
      visibility: 'public'
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response!);
    expect(parsed.visibility).toBe('public');
  });

  it("getCredentialVisibility", async () => {
    await operationSwitch({
      operationId: 'getCredentialVisibility',
      credentialId: credentialToDelete
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response!);
    expect(parsed.visibility).toBe('public');
  });

  it("deleteCredential", async () => {
    await operationSwitch({
      operationId: 'deleteCredential',
      credentialId: credentialToDelete
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response!);
    expect(parsed.success).toBe(true);
  });
});
