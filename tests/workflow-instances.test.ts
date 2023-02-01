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
  let createdInstance;
  it("createWorkflowInstance", async () => {
    await operationSwitch({
      operationId: 'createWorkflowInstance',
      workflowInstance: `${JSON.stringify({
        "name": "Import SS Rolls, Maxi Acero, lot#30021",
        "description": "Stainless Steel Rolls, Maxi Acero, lot number 30021, contact point: Marco",
        "workflowInstance": "urn:uuid:45173n15-22fe-479d-b82f-23b458073f9b",
        "tags": [
          "my-tag",
          "your-tag"
        ]
      })}`
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    createdInstance = parsed;
    expect(parsed.workflowInstance).toBeDefined();
  });

  it("getWorkflowInstances", async () => {
    await operationSwitch({
      operationId: 'getWorkflowInstances',
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.items).toBeDefined();
  });

  it("getWorkflowInstance", async () => {
    await operationSwitch({
      operationId: 'getWorkflowInstance',
      workflowInstanceId: createdInstance.id.split("/").pop()
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.workflowInstance).toBeDefined();
  });

  it("updateWorkflowInstance", async () => {
    await operationSwitch({
      operationId: 'updateWorkflowInstance',
      workflowInstanceId: createdInstance.id.split("/").pop(),
      workflowInstance: `${JSON.stringify({
        "name": "SS Rolls, Maxi Acero, lot#30021 Updated",
        "description": "Stainless Steel Rolls, Maxi Acero, lot number 30021, contact point: Marco",
        "tags": [
          "acero",
          "stainless",
          "rolls"
        ]
      }, null, 2)}`
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.workflowInstance).toBeDefined();
  });

  it("deleteWorkflowInstance", async () => {
    await operationSwitch({
      operationId: 'deleteWorkflowInstance',
      workflowInstanceId: createdInstance.id.split("/").pop()
    });
    expect(process.env.verifiable_data_platform_api_response).toBeDefined()
    const parsed = JSON.parse(process.env.verifiable_data_platform_api_response);
    expect(parsed.message).toBe("workflow instance has been deleted");
  });
});
