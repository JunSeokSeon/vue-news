<template>
  <div>
    <ul class="news-list">
      <li v-for="item in itemList" v-bind:key="item.id" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}
            </router-link>
            <a v-bind:href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { NEWS_FETCH_NEWS, JOBS_FETCH_JOBS, ASKS_FETCH_ASKS } from '@/store/action-types';
// import { mapGetters } from 'vuex';

export default {
  computed : {
    itemList() {
      return this.$store.getters.fetchedList;
    },
  }
  // created() {
  //   let actionName = null;
  //   const routeName = this.$route.name;
    
  //   if (routeName === 'news') {
  //     actionName = NEWS_FETCH_NEWS;
  //   } else if (routeName === 'ask') {
  //     actionName = ASKS_FETCH_ASKS;
  //   } else if (routeName === 'jobs') {
  //     actionName = JOBS_FETCH_JOBS;
  //   }
  //   this.$store.dispatch(actionName);
  // }
  // computed : {
  //   ...mapGetters([
  //     'fetchedJobs'
  //   ])
  //   // ...mapGetters({
  //   //   askItems : 'fetchedAsk'
  //   // })
  //   // ...mapState({
  //   //   fetchedAsk : state => state.asks.asks
  //   // })
  // },
  // created() {
  //   bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store.dispatch(JOBS_FETCH_JOBS)
  //     .then(() => {
  //       bus.$emit("end:spinner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }, 1000);
  // }
}
</script>

<style scoped>
.news-list {
  margin: -0;
  padding : 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282
}
</style>