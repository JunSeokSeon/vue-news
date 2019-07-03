import { SET_LIST } from '../mutations-types';

export default {
  [SET_LIST](state, list) {
    console.log(SET_LIST);
    state.list = list;
  }
}