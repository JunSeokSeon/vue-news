import {  FETCH_ITEM } from '../action-types';
import {  SET_ITEM } from '../mutations-types';
import {  fetchItemInfo } from '@/api';

export default {
  async [FETCH_ITEM]({commit}, id) {
    console.log(FETCH_ITEM);
    var response = await fetchItemInfo(id)
    commit(SET_ITEM, response.data);
    return response;
  },
  // [FETCH_ITEM]({commit}, id) {
  //   console.log(FETCH_ITEM);
  //   fetchItemInfo(id)
  //     .then(({ data }) => {
  //       commit(SET_ITEM, data);
  //     })
  //     .catch(error => console.log(error));
  // }
}