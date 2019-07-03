import Vue from 'vue';
import Vuex from 'vuex';
import list from './list';
import user from './user';
import item from './item';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules : {
    list,
    user,
    item
  }
})

export default store;