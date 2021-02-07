<template>
  <div id="couplet">
    <div v-if="kId in keyData">
      <h2>{{ keyData[kId].title }}</h2>
      <h3>Couplet {{ qId }}</h3>
      <div
        v-if="qId in keyData[kId]['couplets']"
        class="p-grid p-jc-center"
      >
        <div
          v-for="(option, letter) of keyData[kId]['couplets'][qId]"
          :key="letter"
          class="p-col couplet"
        >
          <Galleria
            v-if="imgData[kId][qId][letter]"
            :value="imgData[kId][qId][letter]"
            :circular="true"
            :show-item-navigators="imgData[kId][qId][letter].length > 1"
            :show-item-navigators-on-hover="true"
            :show-thumbnails="false"
          >
            <template #item="{ item }">
              <a
                v-if="item.src"
                :href="item.src"
                target="new"
              >
                <img
                  class="galImage"
                  :src="item.src"
                >
              </a>
              <div
                v-else
                class="noImg"
              />
            </template>
          </Galleria>
          <div
            v-else
            class="emptyDiv"
          />
          <div class="caption">
            <router-link
              class="caption-link"
              :to="option.path"
            >
              {{ letter }}) {{ option.label }}
            </router-link>
          </div>
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
.couplet {
  /* Make each box slightly less than 50% of total width */
  width: 49vw;
  height: 60vh;
  background-color: #222222;
  margin: 5px;
}

.galImage {
  /* Ensure image is always slightly smaller than .couplet div */
  max-height: 48vh;
  object-fit: fill;
  /* Change mouse cursor to zoom-in when hover over images */
  cursor: zoom-in;
}

.emptyDiv {
  /* Make an empty div the same size as an image would be */
  height: 48vh;
  width: 48vh;
}

.caption {
  /* Caption box */
  height: 50px;
  background-color: #222222;
}

.caption-link {
  /* Make the link a block so whole area is clickable */
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: #ffffee;
}
</style>
