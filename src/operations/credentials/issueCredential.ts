import * as core from '@actions/core';
import { Api } from '../../vdp'; 
import { axiosConfig } from '../../config';
import { generateHeaders } from '../../utils';

export const issueCredential = async ({credential, options }) => {
    const api = new Api({ ...axiosConfig });
    const headers = generateHeaders()
    const { data: response } = await api.credentials.issueCredential({ credential: JSON.parse(credential), options: JSON.parse(options) as any }, { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
}