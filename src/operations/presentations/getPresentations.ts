import * as core from "@actions/core";
import { Api } from "../../vdp";
import { axiosConfig } from "../../config";
import { generateHeaders } from "../../utils";

export const getPresentations = async () => {
  const api = new Api({ ...axiosConfig });
  const headers = generateHeaders();
  try {
    const { data: receivedResponse } =
      await api.presentations.getPresentationsSharedWithMe({ headers });
    const { data: sentResponse } =
      await api.presentations.getPresentationsSharedWithOthers({ headers });
    const response = {
      page: 0,
      count: (sentResponse as any).count + (receivedResponse as any).count,
      items: [...(receivedResponse as any).items, ...(sentResponse as any).items],
    };
    core.exportVariable(
      "verifiable_data_platform_api_response",
      response
    );
  } catch (err) {
    console.log(err);
  }

  return null;
};
