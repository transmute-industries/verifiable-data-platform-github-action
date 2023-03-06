import * as core from '@actions/core';

export const axiosConfig = {
    baseURL: core.getInput("api-base-url") || process.env.API_BASE_URL
}