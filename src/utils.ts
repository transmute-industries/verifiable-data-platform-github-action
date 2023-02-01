export const generateHeaders = () => {
    const headers = {
      'Authorization': `Bearer ${process.env.verifiable_data_platform_access_token}`
    }
    return headers;
};
  