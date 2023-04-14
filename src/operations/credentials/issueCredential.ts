import * as core from '@actions/core';
import { Api } from '../../vdp'; 
import { axiosConfig } from '../../config';
import { generateHeaders } from '../../utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const issueCredential = async ({credential, options }: any) => {
    const api = new Api({ ...axiosConfig });
    const headers = generateHeaders()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: response } = await api.credentials.issueCredential({ credential: JSON.parse(credential), options: JSON.parse(options) as any }, { headers })
    core.exportVariable("verifiable_data_platform_api_response", response)
    return null;
}