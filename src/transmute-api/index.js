

const axios = require('axios');

const getAccessToken = async (env) => {
  const { tokenEndpoint, tokenAudience, clientId, clientSecret } = env;
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

const getTokenFromEnv = async (env)=>{
  if (env.accessToken){
    return env.accessToken
  }else {
    const token = await getAccessToken(env);
    return token;
  }
}

const getCredentials = async (env) => {
  const token = await getTokenFromEnv(env);
  const { apiBaseUrl } = env;
  const res = await axios({ 
    method: 'get',
    url: apiBaseUrl +  '/credentials',
    headers: {
      'Authorization': `Bearer ${token}`
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