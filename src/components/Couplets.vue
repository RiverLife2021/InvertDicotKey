<template>
  <div id="couplets">
    <div v-if="kId in keyData">
      <h2>{{ keyData[kId].title }}</h2>
      <h3>Couplet {{ qId }}</h3>
      <div
        v-if="qId in keyData[kId]['couplets']"
      >
        <div>
          <Panel
            v-for="(option, letter) of keyData[kId]['couplets'][qId]"
            :key="letter"
            :collapsed="!isCollapsed[letter]"
            class="p-col couplet"
          >
            <template #header>
              <div class="caption">
                <router-link
                  class="caption-link"
                  :to="option.path"
                >
                  {{ letter }}) {{ option.label }}
                </router-link>
                <span>&nbsp;</span>
                <button
                  v-if="imgData[kId][qId][letter]"
                  @click="toggleImage(letter)"
                >
                  <i class="pi pi-images" />
                </button>
              </div>
            </template>
            <div class="gallery">
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
                      :src="item.thumb"
                    >
                  </a>
                </template>
              </Galleria>
            </div>
          </Panel>
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
  data() {
    return {
      isCollapsed: {},
    }
  },
  computed: {
    kId() {
      this.collapseAll()
      return this.$route.params.kId
    },
    qId() {
      this.collapseAll()
      return this.$route.params.qId
    },
  },
  methods: {
    collapseAll() {
      this.isCollapsed = {}
    },
    toggleImage(letter) {
      // Toggle the collapsed state of panel contents(images)
      if (!(letter in this.isCollapsed)) {
        this.isCollapsed[letter] = false
      }
      this.isCollapsed[letter] = !this.isCollapsed[letter]
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//Default config opts
$baseColor: #333333;

.couplet {
  // Override Panel padding so headers 'touch'
  padding: 0 !important;
}

.gallery {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $baseColor;
  // Thumbnails max height 400px, so add a little extra 'padding'
  height: 450px;
}

.galImage {
  // Change mouse cursor to zoom-in when hover over images
  cursor: zoom-in;
}

.caption-link {
  // Style Panel header link text
  font-size: 1.2rem;
  color: $baseColor;
}
</style>
