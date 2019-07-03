import ListView from './ListView.vue';
import { FETCH_LIST } from '@/store/action-types';
import bus from '../utils/bus.js';


export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션
    name,
    created() {
      bus.$emit("start:spinner");
      this.$store.dispatch(FETCH_LIST, this.$route.name)
        .then(() => {
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView)
    }
  }
}