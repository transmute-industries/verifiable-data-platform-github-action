import * as core from '@actions/core';
import { Api } from '../../vdp'; 
import { axiosConfig } from '../../config';
import { generateHeaders } from '../../utils';

export const verifyOrganizationCredential = async({ verifiableCredential }: any) => {
    const api = new Api({ ...axiosConfig });
    const headers = generateHeaders()
    const { data: response } = await api.credentials.verifyOrganizationCredential({ verifiableCredential: JSON.parse(verifiableCredential) }, { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
}