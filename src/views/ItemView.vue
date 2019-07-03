<template>
  <div>
    <section>
      <user-profile>
        <template slot="username">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
        </template>
        <template slot="time">{{ 'posted' + fetchedItem.time_ago}}</template>     
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { FETCH_ITEM } from '@/store/action-types'
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components : {
    UserProfile
  },
  computed : {
    ...mapGetters([
      'fetchedItem'
    ])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch(FETCH_ITEM, id);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}.user-description {
  padding-left: 8px;
}
.time {
  font-size: 7px;
}
</style>
