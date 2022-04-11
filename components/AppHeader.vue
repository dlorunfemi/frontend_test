<template>
  <header class="header">
    <div class="container">
      <h3>Shapes</h3>
      <button @click="logout">Logout</button>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
  middleware: 'auth',
  methods: {
    logout() {
      this.$store.commit('auth/setUser', null)
      this.$store.commit('auth/setPass', null)
      this.$router.push({ name: 'auth' })
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: #fff;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  >.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .title {
    font-size: 3rem;
    color: #111;
  }
  ul {
    display: flex;
  }
  a {
    display: inline-block;
    color: red;
  }
}
</style>


