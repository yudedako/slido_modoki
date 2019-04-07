<template>
  <members-only>
    <h1>ログインしていないと見れないページ</h1>
    <a href="/account">アカウントページへ</a>
  </members-only>
</template>

<script>
import membersOnly from '~/components/members-only.vue'

export default {
  components: {
    membersOnly
  }
}
</script>
