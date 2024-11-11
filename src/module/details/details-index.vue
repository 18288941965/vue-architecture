<template>
  <details
      id="details-index-demo"
      class="mgr-medium"
  >
    <summary
        class="drop-down-button arrow-down hv-bg"
    >
     用户信息
    </summary>
    <div
        class="details-index-context-demo"
        @click="closeDetails('details-index-demo')"
    >
    <div style="font-weight: bolder;cursor: pointer;"> 这里是内容信息</div>
    <div style="font-weight: bolder;cursor: pointer;"> 这里是内容信息</div>
    <div style="font-weight: bolder;cursor: pointer;"> 这里是内容信息</div>
    <div style="font-weight: bolder;cursor: pointer;"> 这里是内容信息</div>
    <div style="font-weight: bolder;cursor: pointer;"> 这里是内容信息</div>
    </div>
  </details>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'DetailsIndex',
  setup () {
    const closeDetails = (id: string) => {
      const elementById = document.getElementById(id)
      if (elementById && elementById.hasAttribute('open')) {
        elementById.removeAttribute('open')
      }
    }
    return {
      closeDetails,
    }
  },
})
</script>

<style scoped>
  @import "details.css";

  .details-index-context-demo{
    border: 1px solid greenyellow;
    height: 200px;
    width: 140px;
    background-color: plum;
    z-index: 1001;

    position: absolute;
    overflow: auto;
  }
</style>