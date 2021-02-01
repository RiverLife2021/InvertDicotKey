<template>
  <div id="couplet">
    <div v-if="kId in data">
      <h2>{{ data[kId].title }}</h2>
      <h3>Couplet {{ qId }}</h3>
      <div
        v-if="qId in data[kId]['couplets']"
        class="coupletBox"
      >
        <div
          v-for="(option, index) in data[kId]['couplets'][qId]"
          :key="index"
          class="coupletContent"
        >
          <router-link :to="option.path">
            {{ option.label }}
          </router-link>
        </div>
      </div>
      <div v-else>
        No such Couplet
      </div>
    </div>
    <div v-else>
      <div>Key {{ kId }}: No such Key</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Couplets",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    kId() {
      return this.$route.params.kId;
    },
    qId() {
      // qId is an array index, so add 1 to get question id
      return this.$route.params.qId;
    },
    title() {
      return this.$route.params.title;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coupletBox {
  display: flex;
  width: 80vw;
  align-items: center;
  justify-content: space-around;
}

.coupletContent {
  border: 1px solid blue;
  height: 50vh;
  width: 25vw;
}
</style>
