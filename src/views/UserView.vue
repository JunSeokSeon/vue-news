<template>
  <div>
    <user-profile>
      <div slot="username">{{ fetchedUser.id }}</div>
      <span slot="time">{{ 'joined' + fetchedUser.created}}, </span>
      <span slot="karma">{{ fetchedUser.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import { FETCH_USER } from '@/store/action-types'
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  computed : {
    ...mapGetters([
      'fetchedUser'
    ])
  },
  created() {
    const name = this.$route.params.id;
    this.$store.dispatch(FETCH_USER, name);
  }
}
</script>

<style>

</style>
