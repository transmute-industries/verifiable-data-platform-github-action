/* eslint-disable @typescript-eslint/no-non-null-assertion */
import operationSwitch from "../src/operationSwitch";

jest.setTimeout( 1 * 60 * 1000);

describe("Workflow Definition Tests", () => {
  beforeAll(async () => {
    await operationSwitch({
      operationId: "tokenCreate",
      did: process.env.ORGANIZATION_DID_WEB,
      tokenEndpoint: process.env.TOKEN_ENDPOINT,
      tokenAudience: process.env.TOKEN_AUDIENCE,
      apiBaseUrl: process.env.API_BASE_URL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });
    await operationSwitch({
      operationId: "getWorkflowDefinitions",
    });
    await Promise.all(JSON.parse(
      process.env.verifiable_data_platform_api_response!
    ).items.map(async (wf)=>{
      return await operationSwitch({
        operationId: "deleteWorkflowDefinition",
        workflowDefinitionId: wf.id.split("/").pop(),
      });
    }))
  });
  let createdDefinition;
  it("createWorkflowDefinition", async () => {
    await operationSwitch({
      operationId: "createWorkflowDefinition",
      workflowDefinition: `${JSON.stringify({
        workflowDefinition: "https://w3id.org/traceability#sima-steel-license",
        name: "CBP Steel Import with SIMA License",
        description:
          "CBP requires this workflow def for all Steel-related importing based on SIMA License",
        tags: ["CBP", "SIMA", "Steel"],
      })}`,
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined();
    if (process.env.verifiable_data_platform_api_response) {
      const parsed = JSON.parse(
        process.env.verifiable_data_platform_api_response
      );
      createdDefinition = parsed;
      expect(parsed.workflowDefinition).toBeDefined();
    }
  });

  it("getWorkflowDefinitions", async () => {
    await operationSwitch({
      operationId: "getWorkflowDefinitions",
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined();
    if (process.env.verifiable_data_platform_api_response) {
      const parsed = JSON.parse(
        process.env.verifiable_data_platform_api_response
      );
      expect(parsed.items).toBeDefined();
    }
  });

  it("getWorkflowDefinition", async () => {
    await operationSwitch({
      operationId: "getWorkflowDefinition",
      workflowDefinitionId: createdDefinition.id.split("/").pop(),
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined();
    if (process.env.verifiable_data_platform_api_response) {
      const parsed = JSON.parse(
        process.env.verifiable_data_platform_api_response
      );
      expect(parsed.workflowDefinition).toBeDefined();
    }
  });

  it("updateWorkflowDefinition", async () => {
    await operationSwitch({
      operationId: "updateWorkflowDefinition",
      workflowDefinitionId: createdDefinition.id.split("/").pop(),
      workflowDefinition: `${JSON.stringify(
        {
          name: "CBP Steel Import with SIMA License Updated!",
          description:
            "CBP requires this workflow def for all Steel-related importing based on SIMA License",
          tags: ["CBP", "SIMA", "Steel"],
        },
        null,
        2
      )}`,
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined();
    if (process.env.verifiable_data_platform_api_response) {
      const parsed = JSON.parse(
        process.env.verifiable_data_platform_api_response
      );
      expect(parsed.workflowDefinition).toBeDefined();
    }
  });

  it("deleteWorkflowDefinition", async () => {
    await operationSwitch({
      operationId: "deleteWorkflowDefinition",
      workflowDefinitionId: createdDefinition.id.split("/").pop(),
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined();
    if (process.env.verifiable_data_platform_api_response) {
      const parsed = JSON.parse(
        process.env.verifiable_data_platform_api_response
      );
      expect(parsed.message).toBe("workflow definition has been deleted");
    }
  });
});
