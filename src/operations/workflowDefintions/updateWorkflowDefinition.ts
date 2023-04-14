import * as core from '@actions/core';
import { Api } from '../../vdp'; 
import { axiosConfig } from '../../config';
import { generateHeaders } from '../../utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateWorkflowDefinition = async ({ workflowDefinitionId, workflowDefinition }: any) => {
    const api = new Api({ ...axiosConfig });
    const headers = generateHeaders()
    const { data: response } = await api.workflows.updateWorkflowDefinition(workflowDefinitionId, JSON.parse(workflowDefinition), { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
}