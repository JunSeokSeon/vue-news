import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView.js';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import { FETCH_LIST } from '@/store/action-types';
import bus from '../utils/bus.js';
import store from'../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode : 'history',
  routes: [
    {
      path : '/',
      redirect : '/news',
    },
    {
      path : '/news',
      name : 'news',
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter : (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch(FETCH_LIST, to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path : '/ask',
      name : 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter : (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch(FETCH_LIST, to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path : '/jobs',
      name : 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter : (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch(FETCH_LIST, to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path : '/user/:id',
      component : UserView
    },
    {
      path : '/item/:id',
      component : ItemView
    }
  ]
});

export default router;
