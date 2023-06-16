<!--
    @description 
    @author zhangcj
    @date 2023-06-16 15:18:54
 -->
<template>
  <div class="app-container">
    <div class="viewer-container" ref="viewerDOM"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Viewer } from 'cesium'
const viewerDOM = ref()
onMounted(() => {
  viewerInit()
})
const viewerInit = () => {
  const viewer = new Viewer(viewerDOM.value, {
    infoBox: false
  })
  viewer.animation.container.setAttribute('style', 'display:none')
}
</script>

<style lang="less" scoped>
.app-container {
  height: 100%;
  .viewer-container {
    height: 100%;
    width: 100%;
  }
}
</style>
