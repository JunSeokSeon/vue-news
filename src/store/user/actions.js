import {  FETCH_USER } from '../action-types';
import {  SET_USER } from '../mutations-types';
import {  fetchUserInfo } from '@/api';

export default {
  async [FETCH_USER]({commit}, name) {
    console.log(FETCH_USER);
    var response = await fetchUserInfo(name);
    commit(SET_USER, response.data);
    return response;
  }
}