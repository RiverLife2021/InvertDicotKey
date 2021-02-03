<template>
  <div class="dikey">
    <h2>Keys</h2>
    <ul
      v-for="(key, id) of keyData"
      :key="key"
    >
      <li>
        <router-link :to="{ name: 'Couplets', params: { kId: id, qId: '1' }}">
          {{ key.title }}
        </router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'Keys',
  props: {
    keyData: {
      type: Object,
      default: () => ({}),
    },
    imgData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped />
