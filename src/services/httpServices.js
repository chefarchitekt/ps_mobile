import axios from 'axios';
import { networkConfigDefault } from './networkConfig';

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common['X-Auth-Token'] = `${token}`;
  } else {
    delete axios.defaults.headers.common['X-Auth-Token'];
  }
};

const mapUrlToDataKey = (resourceUrl, dataKeys) => {
  const keyStructure = /\{([^\}]+)\}/g;
  const refinedUrl = resourceUrl.replace(keyStructure, (m, key) => {
    if (key in dataKeys) {
      return dataKeys[key];
    }
  });
  return refinedUrl;
};

const voipUrl = networkConfigDefault.coreApiUrl.app;

const axiosHttpErrorLogger = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('Error on Http Response', 
      'Error Data:' + error.response.data + ' ' + 
      'Error Status: ' + error.response.status + ' ' + 
      'Error Header: ' + error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('Error on Http Request', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error on Http Settings', error.message);
  }
  console.log('Error on Http Config', error.config);
};

/* //sample error.data
  {
    "data":{
      "message": "invalid credentials"
    },
    "error": "401",
    "message": "invalid_credentials",
    "status": "error",
    "timestamp": "2017-11-04T06:07:20",
    "version": "4.1.35",
    "node": "aj21e9viucCzAEyUHpbeBg",
    "request_id": "2ed33bb4310490830fd6481cd7b2d04c",
    "auth_token": "jjjoooQ"
}
*/

export const getJSON = (httpResource, urlParamsObject, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.get(voipUrl + httpUrl)
  .then(response => {
    //console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    axiosHttpErrorLogger(error);
    if (errorCallback) {
      errorCallback(error);
    }
  });
};

//sample dataToPost {"data":{"first_name":"User", "last_name":"Three"}}
export const postJSON = (httpResource, urlParamsObject, dataToPost, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.post(voipUrl + httpUrl, dataToPost)
  .then(response => {
    //console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    axiosHttpErrorLogger(error);
    if (errorCallback) {
      errorCallback(error);
    }
  });
};

//sample dataToPut {"data":{"first_name":"User", "last_name":"Three"}}
export const putJSON = (httpResource, urlParamsObject, dataToPut, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.put(voipUrl + httpUrl, dataToPut)
  .then(response => {
    //console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    axiosHttpErrorLogger(error);
    if (errorCallback) {
      errorCallback(error);
    }
  });
};

//sample dataToPatch {"data":{"first_name":"User", "last_name":"Three"}}
export const patchJSON = (httpResource, urlParamsObject, dataToPatch, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.patch(voipUrl + httpUrl, dataToPatch)
  .then(response => {
    //console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    axiosHttpErrorLogger(error);
    if (errorCallback) {
      errorCallback(error);
    }
  });
};

export const deleteJSON = (httpResource, urlParamsObject, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.delete(voipUrl + httpUrl)
  .then(response => {
    //axios response data is response.data
    //console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    axiosHttpErrorLogger(error);
    if (errorCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      errorCallback(error);
    }
  });
};
