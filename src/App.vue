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
import "cesium/Build/CesiumUnminified/Widgets/widgets.css"
import { onMounted, ref } from "vue"
import { Viewer } from "cesium"
const viewerDOM = ref()
window.CESIUM_BASE_URL = 'libs/cesium/'
onMounted(() => {
  viewerInit()
})
const viewerInit = () => {
  const viewer = new Viewer(viewerDOM.value, {
    infoBox: false,
  })
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
