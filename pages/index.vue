<template>
  <div>
    <AppHeader />
    <div class="container">
      <h2 class="title">Filters</h2>

      <div class="row">
        <span class="title">Shapes</span>
        <div class="shapes">
          <div
            v-for="(shape, index) in coloredShapes.shapes"
            :key="index"
            :data-key="shape"
            class="shape selected"
            @click="toggleShape($event)"
          >
            {{ shape }}
          </div>
        </div>
      </div>

      <div class="row">
        <span class="title">Color</span>
        <div class="colors">
          <div
            v-for="value, key, index in coloredShapes.colors"
            :key="index"
            :data-key="key"
            class="color selected"
            :style="{ '--color': value[1] }"
            @click="toggleColor($event)"
          >
          </div>
        </div>
      </div>


      <div class="row">
        <h5 class="title">All Oval Items:</h5>
        <div class="grids">
          <div
            v-for="data, index in filteredData"
            :key="index"
            class="grid"
          ><span :class="[data.shape]" :style="{ '--shape-color': data.color }"></span></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from "@/components/AppHeader.vue";

export default Vue.extend({
  name: 'IndexPage',
  // middleware: 'auth',
  components: {
    AppHeader
  },
  async asyncData({ $content }) {
    const coloredShapes:any = await $content('coloredShapes').fetch()

    return { coloredShapes }
  },
  data() {
    return {
      selectedColors: [ "red", "blue", "cyan", "gray", "green", "yellow" ],
      selectedShapes: [ "oval", "circle", "square", "triangle", "rectangle" ],
      computedKey: 0,
    }
  },

  computed: {
    filteredData() {
      if (
        this.selectedColors.length === 0 &&
        this.selectedShapes.length === 0
      ) {
        return null;
      } else if (
        this.selectedColors.length === 0 &&
        this.selectedShapes.length > 0
      ) {
        return this.coloredShapes.data
      } else if (
        this.selectedColors.length > 0 &&
        this.selectedShapes.length === 0
      ) {
        return this.coloredShapes.data
      } else {
        return this.coloredShapes.data
      }
    },
  },

  methods: {
    toggleColor(evt: { target: any; }) {
      this.computedKey++;
      const el = evt.target
      const elColor = el.getAttribute('data-key')
      if (this.selectedColors.includes(elColor)) {
        el.classList.remove('selected')
        this.selectedColors.splice(this.selectedColors.indexOf(elColor), 1)
      } else {
        el.classList.add('selected')
        this.selectedColors.push(elColor)
      }
    },

    toggleShape(evt: { target: any; }) {
      this.computedKey++;
      const el = evt.target
      const elShape = el.getAttribute('data-key')
      if (this.selectedShapes.includes(elShape)) {
        el.classList.remove('selected')
        this.selectedShapes.splice(this.selectedShapes.indexOf(elShape), 1)
      } else {
        el.classList.add('selected')
        this.selectedShapes.push(elShape)
      }
    },
  },
})
</script>
