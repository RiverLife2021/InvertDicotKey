<template>
  <div class="family">
    <h2>{{ name }}</h2>
    <p>Info on the {{ name }} family goes here.</p>
  </div>
</template>

<script>
export default {
  name: "Families",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    name() {
      return this.$route.params.name;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped />
