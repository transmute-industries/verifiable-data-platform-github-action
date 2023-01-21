

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


const storeCredential = async ({apiBaseUrl, accessToken, verifiableCredential}) => {
  try {
    const url = apiBaseUrl +  '/credentials'
    const res = await axios.post(url, verifiableCredential, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    });
    return res.data;
  } catch(e){
    console.error(e)
    return null
  }
}

const issueCredential = async ({apiBaseUrl, accessToken, credential}) => {
  try {
    const url = apiBaseUrl +  '/credentials/issue'
    const res = await axios.post(url, { credential, "options": {
      "type": "Ed25519Signature2018",
      // "created": "2020-04-02T18:48:36Z",
      // "credentialStatus": {
      //   "type": "RevocationList2020Status"
      // }
    }}, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    });
    return res.data;
  } catch(e){
    console.error(e)
    return null
  }
}

const notifyPresentationAvailable = async ({  endpoint, query}) => {
  try {
    const res = await axios.post(endpoint, { query });
    return res.data;
  } catch(e){
    console.error(e)
    return null
  }
}

const provePresentation = async ({apiBaseUrl, accessToken, presentation, domain, challenge}) => {
  try {
    const url = apiBaseUrl +  '/presentations/prove'
    const body = { 
      presentation, 
      "options": {
        domain,
        challenge
      }
  }
    const res = await axios.post(url, body, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    });
    return res.data;
  } catch(e){
    console.error(e)
    return null
  }
}



const sendTo = async ({apiBaseUrl, accessToken, contactId, presentation}) => {
  try {
    const url = apiBaseUrl +  '/presentations/send-did-auth-presentation'
    const body = { 
      presentation, 
      contactId
  }
    const res = await axios.post(url, body, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    });
    return res.data;
  } catch(e){
    console.error(e)
    return null
  }
}

const submitPresentationWithOAuth2Security = async ({apiBaseUrl, accessToken, organizationId, presentation}) => {
  try {
    const url = apiBaseUrl +  `/organizations/${organizationId}/presentations`
    const body = presentation;
    const res = await axios.post(url, body, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    });
    return res.data;
  } catch(e){
    console.error(e)
    return null
  }
}




const token = {
  get: getAccessToken
}

const credentials = {
  get: getCredentials,
  store: storeCredential,
  issue: issueCredential
}

const presentations = {
  available: notifyPresentationAvailable,
  prove: provePresentation, // broken
  sendTo: sendTo,
  submit: submitPresentationWithOAuth2Security
}

const api = { token, credentials, presentations };


module.exports = api;