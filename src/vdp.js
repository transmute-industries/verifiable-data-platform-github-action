

const axios = require('axios');

const getAccessToken = async ({ tokenEndpoint, tokenAudience, clientId, clientSecret }) => {
  const res = await axios({
    method: 'post',
    url: tokenEndpoint,
    data: {
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      audience: tokenAudience,
    }
  });
  const { access_token } = res.data;
  return access_token;
};

const getCredentials = async ({apiBaseUrl, accessToken}) => {
  const res = await axios({ 
    method: 'get',
    url: apiBaseUrl +  '/credentials',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  return res.data;
}

const token = {
  get: getAccessToken
}

const credentials = {
  get: getCredentials
}

const api = { token, credentials };


module.exports = api;