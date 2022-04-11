<template>
  <div>
    <form @submit.prevent>
      <label for="username">Username</label>
      <input
        id="username"
        v-model="user.username"
        type="text"
      />
      <label for="password">Password</label>
      <input
        id="password"
        v-model="user.password"
        type="text"
      />
      <button
        :disabled="!user.username || !user.password"
        @click="login"
      >
        Login
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.commit('auth/setUser', this.user.username)
      this.$store.commit('auth/setPass', this.user.password)
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
<style scoped>
div {
  max-width: 400px;
  margin: 20px auto;
}
</style>
