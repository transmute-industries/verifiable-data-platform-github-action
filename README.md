# Verifiable Data Platform GitHub Action

🚧 Experimental 🏗️.  (DO NOT USE THIS)

[![CI](https://github.com/transmute-industries/verifiable-data-platform-github-action/actions/workflows/ci.yml/badge.svg)](https://github.com/transmute-industries/verifiable-data-platform-github-action/actions/workflows/ci.yml)
![Branches](./badges/coverage-branches.svg)
![Functions](./badges/coverage-functions.svg)
![Lines](./badges/coverage-lines.svg)
![Statements](./badges/coverage-statements.svg)
![Jest coverage](./badges/coverage-jest%20coverage.svg)

<!-- [![NPM](https://nodei.co/npm/@transmute/verifiable-data-platform-github-action.png?mini=true)](https://npmjs.org/package/@transmute/verifiable-data-platform-github-action) -->

<img src="./transmute-banner.png" />

#### [Questions? Contact Transmute](https://transmute.typeform.com/to/RshfIw?typeform-source=verifiable-data-platform-github-action)

## Usage

```yml
name: Demo
on: [workflow_dispatch]
jobs:
  store-credential:
    runs-on: ubuntu-latest
    name: Store Credential
    steps:
      - name: Get Access Token
        uses: transmute-industries/verifiable-data-platform-github-action@v0.0.2
        id: getAccessToken
        with:
          operation-id: getAccessToken
          api-base-url: ${{ secrets.API_BASE_URL }}
          did: ${{ secrets.ORGANIZATION_DID_WEB }}
          token-endpoint: ${{ secrets.TOKEN_ENDPOINT }}
          token-audience: ${{ secrets.TOKEN_AUDIENCE }} 
          client-id: ${{ secrets.CLIENT_ID }}
          client-secret: ${{ secrets.CLIENT_SECRET }}
      - name: Store Credential
        uses: transmute-industries/verifiable-data-platform-github-action@v0.0.2
        id: storeCredential
        with:
          operation-id: storeCredential
          verifiable-credential: |
            {
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
            }
```

## Develop

```bash
npm i
npm t
```