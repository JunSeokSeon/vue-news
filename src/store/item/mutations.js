import { SET_ITEM } from '../mutations-types';

export default {
  [SET_ITEM](state, item) {
    console.log(SET_ITEM);
    state.item = item;
  }
}