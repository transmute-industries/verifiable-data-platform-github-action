import operationSwitch from "../src/operationSwitch";

// jest.setTimeout( 10 * 1000)
describe("submitPresentationWithOAuth2Security", () => {
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
  it("submitPresentationWithOAuth2Security", async () => {
    expect(process.env.verifiable_data_platform_api_response).toBeUndefined()
    const presentation = `${JSON.stringify({
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
      ],
      type: ["VerifiablePresentation"],
      holder: process.env.ORGANIZATION_DID_WEB,
      verifiableCredential: [{
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://ref.gs1.org/gs1/vc/licence-context/",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "id": "did:example:60cda318-a0a7-4e39-b600-ea38bf68a31f",
        "type": [
          "VerifiableCredential",
          "GS1KeyCredential"
        ],
        "issuer": "did:key:z6MktHQo3fRRohk44dsbE76CuiTpBmyMWq2VVjvV6aBSeE3U",
        "issuanceDate": "2020-12-02T09:48:11Z",
        "credentialSubject": {
          "id": "https://id.gs1.org/01/07541234555551",
          "extendsCredential": "did:example:b6d13abe-464d-4bb9-a568-b6d81efd57e3"
        },
        "credentialStatus": {
          "id": "https://www.example.com/mycreds/status/60cda318-a0a7-4e39-b600-ea38bf68a31f",
          "type": "StatusList2021Credential"
        },
        "proof": {
          "type": "Ed25519Signature2018",
          "created": "2023-01-03T11:29:14Z",
          "verificationMethod": "did:key:z6MktHQo3fRRohk44dsbE76CuiTpBmyMWq2VVjvV6aBSeE3U#z6MktHQo3fRRohk44dsbE76CuiTpBmyMWq2VVjvV6aBSeE3U",
          "proofPurpose": "assertionMethod",
          "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..HZtoLHUCGXalQH8VPClh0TcsQeNKS5i9KWLyASTQYfPIUPDMnLnjgjPJ5TVCn7S4CV7i45aTsUWkfs6cBNntBQ"
        }
      }],
    }, null, 2)}`
    await operationSwitch({
      operationId: 'submitDidAuthPresentationToContact',
      presentation: presentation,
      contactId: 'd70abab1-b219-436a-8a11-1165a74c00fc'
    });
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response)
    expect(parsed.presentationStatus).toBe('Sent')
  });
});
