import axios from 'axios';
import { logged_user } from './actionType';
import { loadingSet } from './events';
import Swal from 'sweetalert2';
const baseUrl = 'https://temanmain-orchestrator-production.up.railway.app';

export const loginUser = function (userData) {
  return function (dispatch) {
    dispatch(loadingSet(true));
    return axios(`${baseUrl}/users/public/login`, {
      method: 'POST',
      data: userData,
    }).then((data) => {
      console.log(data, 'hasilLogin');
      localStorage.setItem('access_token', data.data.access_token);
      localStorage.setItem('name', data.data.name);
      localStorage.setItem('profilePict', data.data.profilePict);
      Swal.fire('Success Login', data.data.message, 'success');
    });
  };
};
export const fetchAllUsers = function () {
  return function (dispatch) {
    dispatch(loadingSet(true));
    return axios(`${baseUrl}/users`, {
      method: 'GET',
    }).then((data) => {
      return data;
    });
  };
};
export const fetchMyProfile = function () {
  return function (dispatch) {
    dispatch(loadingSet(true));
    return axios
      .get(`${baseUrl}/users/my-profile`, {
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
      .then((data) => {
        console.log(data.data, ' <<<<<<<<<<<<<<<<<<<<<<');
        dispatch({
          type: logged_user,
          payload: data.data,
        });
        return data;
      });
  };
};

export const editMyProfile = function (data) {
  return function (dispatch) {
    dispatch(loadingSet(true));
    return axios
      .put(`${baseUrl}/users/my-profil`, data, {
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
      .then((data) => {
        return data;
      });
  };
};

export const addUser = function (userData) {
  return function (dispatch) {
    dispatch(loadingSet(true));
    return axios.post(`${baseUrl}/users/public/register`, userData);
  };
};
