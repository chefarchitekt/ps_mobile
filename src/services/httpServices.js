import axios from 'axios';

export const setAuthorizationToken = (token) => {
  if (token) {
    //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.common['X-Auth-Token'] = token;    
  } else {
    delete axios.defaults.headers.common['X-Auth-Token'];
  }
};

