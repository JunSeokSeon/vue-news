import { SET_USER } from '../mutations-types';

export default {
  [SET_USER](state, user) {
    console.log(SET_USER);
    state.user = user;
  }
}