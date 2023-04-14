import * as core from "@actions/core";
import { Api } from "../../vdp";
import { axiosConfig } from "../../config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tokenCreate = async (env: any) => {
  const api = new Api({ ...axiosConfig });
  const { data: token } = await api.oauth.tokenCreate({
    grant_type: "client_credentials",
    client_id: env.clientId,
    client_secret: env.clientSecret,
    audience: env.tokenAudience,
  });
  core.exportVariable(
    "API_BASE_URL",
    core.getInput("api-base-url") || process.env.API_BASE_URL
  );
  core.exportVariable(
    "verifiable_data_platform_access_token",
    token.access_token
  );
  return null;
};
