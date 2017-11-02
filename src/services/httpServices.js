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

export const getJSON = (httpResource, urlParamsObject, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.get(voipUrl + httpUrl)
  .then(response => {
    console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    console.log(error);
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
    console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    console.log(error);
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
    console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    console.log(error);
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
    console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    console.log(error);
    if (errorCallback) {
      errorCallback(error);
    }
  });
};

export const deleteJSON = (httpResource, urlParamsObject, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.delete(voipUrl + httpUrl)
  .then(response => {
    console.log(response.data);
    if (successCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      successCallback(response.data);
    }
  })
  .catch(error => {
    console.log(error);
    if (errorCallback) {
      //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
      errorCallback(error);
    }
  });
};
