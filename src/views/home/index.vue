<script lang="ts" setup name="Home">
import { Application } from '@splinetool/runtime';
import { ref, nextTick } from 'vue';
let obj
nextTick(() => {
    const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
    const spline = new Application(canvas);
    spline.load('https://prod.spline.design/ivEMfk9ulAFRBn22/scene.splinecode').then(() => {
        spline.setZoom(1.4);
    });
})
</script>
<script lang="ts">
export default { name: "Home" }
</script>

<template>
    <div class="home">
        <canvas id="canvas3d"></canvas>
    </div>
</template>

<style scoped lang="less">
.home {}
</style>
