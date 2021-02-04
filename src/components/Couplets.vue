<template>
  <div id="couplet">
    <div v-if="kId in keyData">
      <h2>{{ keyData[kId].title }}</h2>
      <h3>Couplet {{ qId }}</h3>
      <div
        v-if="qId in keyData[kId]['couplets']"
        class="coupletBox"
      >
        <div
          v-for="(option, letter) of keyData[kId]['couplets'][qId]"
          :key="letter"
          class="coupletContent"
        >
          <div v-if="letter in imgData[kId][qId]">
            <div
              v-for="img in imgData[kId][qId][letter]"
              :key="img"
            >
              <img
                class="keyimg"
                :src="img"
              >
            </div>
          </div>
          <span>{{ letter }}.&nbsp;</span>
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
  name: 'Couplets',
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
  computed: {
    kId() {
      return this.$route.params.kId
    },
    qId() {
      // qId is an array index, so add 1 to get question id
      return this.$route.params.qId
    },
    title() {
      return this.$route.params.title
    },
  },
}
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
  max-width: 25vw;
}

.keyimg {
  max-width: 100px;
  max-height: 100px;
}
</style>
