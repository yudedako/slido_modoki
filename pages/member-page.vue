<template>
  <members-only>
    <h1>ログインしていないと見れないページ</h1>
    <ul>
      <li v-for="(user, userIdx) in users" :key="userIdx">
        <ul>
          <li>name: {{ user.name }}</li>
          <li>email: {{ user.email }}</li>
        </ul>
      </li>
    </ul>
    <a href="/account">アカウントページへ</a>
  </members-only>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
import membersOnly from '~/components/members-only.vue'

const db = firebase.firestore();

export default {
  components: {
    membersOnly
  },

  created: function() {
    this.$store.dispatch('setUsersRef', db.collection('users'))
  },

  computed: {
    ...mapGetters({ users: 'getUsers' })
  }
}
</script>
