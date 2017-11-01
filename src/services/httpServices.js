import axios from 'axios';

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

export const getJSON = (httpResource, urlParamsObject, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.get(httpUrl)
  .then(response => {
    console.log(response.data);
    if (successCallback) {
      successCallback();
    }
  })
  .catch(error => {
    console.log(error);
    if (errorCallback) {
      errorCallback();
    }
  });
};

//sample dataToPost {"data":{"first_name":"User", "last_name":"Three"}}
export const postJSON = (httpResource, urlParamsObject, dataToPost, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.post(httpUrl, dataToPost)
  .then(response => {
    console.log(response.data);
    if (successCallback) {
      successCallback();
    }
  })
  .catch(error => {
    console.log(error);
    if (errorCallback) {
      errorCallback();
    }
  });
};

//sample dataToPut {"data":{"first_name":"User", "last_name":"Three"}}
export const putJSON = (httpResource, urlParamsObject, dataToPut, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.put(httpUrl, dataToPut)
  .then(response => {
    console.log(response.data);
    if (successCallback) {
      successCallback();
    }
  })
  .catch(error => {
    console.log(error);
    if (errorCallback) {
      errorCallback();
    }
  });
};

//sample dataToPatch {"data":{"first_name":"User", "last_name":"Three"}}
export const patchJSON = (httpResource, urlParamsObject, dataToPatch, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.patch(httpUrl, dataToPatch)
  .then(response => {
    console.log(response.data);
    if (successCallback) {
      successCallback();
    }
  })
  .catch(error => {
    console.log(error);
    if (errorCallback) {
      errorCallback();
    }
  });
};

export const deleteJSON = (httpResource, urlParamsObject, successCallback, errorCallback) => {
  const httpUrl = mapUrlToDataKey(httpResource.url, urlParamsObject);
  axios.delete(httpUrl)
  .then(response => {
    console.log(response.data);
    if (successCallback) {
      successCallback();
    }
  })
  .catch(error => {
    console.log(error);
    if (errorCallback) {
      errorCallback();
    }
  });
};
