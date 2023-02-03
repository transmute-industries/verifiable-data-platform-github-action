import * as core from '@actions/core';
import { Api } from '../../vdp'; 
import { axiosConfig } from '../../config';
import { generateHeaders } from '../../utils';

// This is the VC API Spec End-point, see https://github.com/w3c-ccg/vc-api
export const updateCredentialStatus = async({ credentialId, credentialStatus }) => {
    const api = new Api({ ...axiosConfig });
    const headers = generateHeaders()
    const { data: response } = await api.credentials.updateCredentialStatus( { credentialId, credentialStatus: JSON.parse(credentialStatus) }, { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
}