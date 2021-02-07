<template>
  <div id="app">
    <router-link to="/">
      Home
    </router-link>
    <h1>Dichotomous Key Application</h1>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
}

h1 {
  text-align: center;
}
</style>
