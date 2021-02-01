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
  name: "App",
  components: {},
};
</script>

<style>
#app {
}

h1 {
  text-align: center;
}
</style>
