import * as core from '@actions/core';
import { Api } from '../../vdp'; 
import { axiosConfig } from '../../config';
import { generateHeaders } from '../../utils';

// This is the VC API Spec End-point, see https://github.com/w3c-ccg/vc-api
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateCredentialStatus = async({ credentialId, credentialStatus }: any) => {
    try {
    const api = new Api({ ...axiosConfig });
    const headers = generateHeaders()
    const { data: response } = await api.credentials.updateCredentialStatus( { credentialId, credentialStatus: JSON.parse(credentialStatus) }, { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    } catch(e){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        console.error((e as any).response.data)
    }
    return null;
}