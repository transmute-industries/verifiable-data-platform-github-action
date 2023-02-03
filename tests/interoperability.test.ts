import operationSwitch from "../src/operationSwitch";

describe("Credential Operat Tests", () => {
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

  it("resolve", async () => {
    await operationSwitch({
      operationId: 'resolve',
      did: process.env.ORGANIZATION_DID_WEB
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.didDocument).toBeDefined();
  });

  let credentialToDelete = {
    id: null,
    verifiableCredential: null
  };
  it("issueCredential", async () => {
    await operationSwitch({
      operationId: 'issueCredential',
      credential: `${JSON.stringify({
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://ref.gs1.org/gs1/vc/licence-context/",
          "https://w3id.org/vc-revocation-list-2020/v1"
        ],
        "id": "urn:uuid:45a44711-e457-4fa8-9b89-69fe0287c86a",
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
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.verifiableCredential.proof).toBeDefined();
  });

  it("getCredentials", async () => {
    await operationSwitch({
      operationId: 'getCredentials',
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.items).toBeDefined();
    credentialToDelete = parsed.items[0];
  });

  it("updateCredentialStatus", async () => {
    await operationSwitch({
      operationId: 'updateCredentialStatus',
      credentialId: credentialToDelete.verifiableCredential.id,
      credentialStatus: `${JSON.stringify([{
        "type": "RevocationList2020Status",
        "status": "0"
      }])}`
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.revoked).toBeDefined();
  });

  // We are depreciating support of BBS/Bls12381 signatures which is the only
  // one that works with this operation so skipping test.
  it.skip("deriveCredential", async () => {
    await operationSwitch({
      operationId: 'deriveCredential',
      verifiableCredential: ''
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.verified).toBe(true);
  });

  it("verifyOrganizationCredential", async () => {
    await operationSwitch({
      operationId: 'verifyOrganizationCredential',
      verifiableCredential: `${JSON.stringify(credentialToDelete.verifiableCredential, null, 2)}`,
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.verified).toBe(true);
  });

  it("deleteCredential", async () => {
    await operationSwitch({
      operationId: 'deleteCredential',
      credentialId: credentialToDelete.id
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.success).toBe(true);
  });

  let domain = '';
  let challenge = '';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_0, _1, _2, _3, organizationId] = process.env.ORGANIZATION_DID_WEB.split(':')
  it("notifyPresentationAvailable", async () => {
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
    domain = parsed.domain;
    challenge = parsed.challenge;
    expect(parsed.domain).toBeDefined()
    expect(parsed.challenge).toBeDefined()
  });

  let vpToSend;
  it("provePresentation", async () => {
    const presentation = `${JSON.stringify({
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
      ],
      type: ["VerifiablePresentation"],
      holder: process.env.ORGANIZATION_DID_WEB,
      verifiableCredential: [credentialToDelete.verifiableCredential],
    }, null, 2)}`

    const options = `${JSON.stringify({
      domain,
      challenge
    }, null, 2)}`

    await operationSwitch({
      operationId: 'provePresentation',
      presentation,
      options 
    });
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    vpToSend = parsed.verifiablePresentation
    expect(parsed.verifiablePresentation.proof).toBeDefined()
  });

  it("storePresentation", async () => {
    await operationSwitch({
      operationId: 'storePresentation',
      organizationId: organizationId,
      verifiablePresentation: `${JSON.stringify(vpToSend)}`,
    });
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.verified).toBeDefined()
  });

  it("verifyPresentation", async () => {
    await operationSwitch({
      operationId: 'verifyPresentation',
      verifiablePresentation: `${JSON.stringify(vpToSend)}`,
      "options": `${JSON.stringify({
        "challenge": challenge
      })}`
    });
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.verified).toBeDefined()
  });

  it("submitPresentationWithOAuth2Security", async () => {
    await operationSwitch({
      operationId: 'submitPresentationWithOAuth2Security',
      organizationId: organizationId,
      verifiablePresentation: `${JSON.stringify(vpToSend)}`,
    });
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.submitted).toBe(true)
  });
});
