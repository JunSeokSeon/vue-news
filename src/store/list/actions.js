import { FETCH_LIST } from '../action-types';
import { SET_LIST } from '../mutations-types';
import { fetchList } from '@/api';

export default {
  async [FETCH_LIST]({commit}, name) {
    console.log(FETCH_LIST);
    var response = await fetchList(name);
    commit(SET_LIST, response.data);
    return response;
  }
}