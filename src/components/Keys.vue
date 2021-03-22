<template>
  <div class="dikey">
    <h2>Keys</h2>
    <Panel
      v-for="(key, id) of keyData"
      :key="id"
      :collapsed="true"
      :toggleable="false"
    >
      <template #header>
        <router-link
          :to="{ name: 'Couplets', params: { kId: id, qId: '1' }}"
          class="caption-link"
        >
          {{ key.title }}
        </router-link>
      </template>
    </Panel>
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

<style lang="scss">
.caption-link {
  // Style Panel header link text
  font-size: 1.2rem;
  color: #222222;
}
</style>
