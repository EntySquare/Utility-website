<script lang="ts" setup name="Home">
import MainStore from '@/store'
import util from "@/utils";
import { nextTick, ref } from 'vue';
const { home } = MainStore() //使用store
const ivEMfk9ulAFRBn22Show = ref(false)
function loaded(Spline: any) {
    home.homeObj = Spline
    Spline.setZoom(1.5);
    // console.log('Spline:', Spline)
    // console.log('home.homeObj:', home.homeObj)
}
let ivEMfk9ulAFRBn22: HTMLCanvasElement
nextTick(() => {
    ivEMfk9ulAFRBn22 = document.getElementById('ivEMfk9ulAFRBn22') as HTMLCanvasElement
    setTimeout(() => {
        ivEMfk9ulAFRBn22.style.height = 730 + 'px'
        ivEMfk9ulAFRBn22.style.width = '100vw'
        ivEMfk9ulAFRBn22Show.value = true
    }, 500)
})
</script>
<script lang="ts">
export default { name: "Home" }
</script>

<template>
    <div class="home">
        <div class="ivEMfk9ulAFRBn22">
            <div :class="[home.temS ? 'nav-theme-dark' : 'nav-theme-light']"></div>
            <div v-show="ivEMfk9ulAFRBn22Show">
                <Spline id="ivEMfk9ulAFRBn22" @spline-loaded="loaded"
                    scene="https://prod.spline.design/ivEMfk9ulAFRBn22/scene.splinecode" />
            </div>
        </div>
        <div class="interlayer"
            :style="{ background: home.temS ? 'linear-gradient(180deg, #f0f1f8 0%, #1e1e1e 100%)' : 'transparent' }"></div>
        <div class="container">
            {{ home.temS }}
        </div>
    </div>
</template>

<style scoped lang="less">
.home {
    height: 3000px;

    .ivEMfk9ulAFRBn22 {
        display: flex;
        justify-content: center;
        height: 730px;
        background-color: #fff;


        .nav-theme-light,
        .nav-theme-dark {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 730px;
            z-index: 998;
        }

        .nav-theme-light {
            background: linear-gradient(0deg, rgba(217, 217, 217, 0) 0%, #d2e6d8 100%);
        }

        .nav-theme-dark {
            // background: linear-gradient(0deg, #00000000 60%, #1e1e1e 100%);
            background: linear-gradient(0deg, rgba(217, 217, 217, 0) 0%, #d2e6d8 100%);

            // &::before {
            //     content: '';
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     width: 100%;
            //     height: 730px;
            //     background: linear-gradient(180deg, #00000000 60%, #1e1e1e 100%);
            //     z-index: 998;
            // }
        }
    }

    .container {
        // background: pink;
    }
}
</style>
