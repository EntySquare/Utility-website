<script lang="ts" setup name="Home">
import MainStore from '@/store'
import { nextTick, ref } from 'vue';
const { home } = MainStore() //使用store

//! 下面部分为引入方式导入动画
const ivEMfk9ulAFRBn22Show = ref(false)
// function loaded(Spline: any) {
//     home.homeObj = Spline
//     Spline.setZoom(1.4);
//     Spline.setBackgroundColor('#f1f2f1')
//     console.log('Spline:', Spline)
//     console.log('home.homeObj:', home.homeObj)
// }
// let ivEMfk9ulAFRBn22: HTMLCanvasElement
// nextTick(() => {
//     ivEMfk9ulAFRBn22 = document.getElementById('ivEMfk9ulAFRBn22') as HTMLCanvasElement
//     setTimeout(() => {
//         ivEMfk9ulAFRBn22.style.height = 730 + 'px'
//         ivEMfk9ulAFRBn22Show.value = true
//     }, 500)
// })
</script>
<script lang="ts">
export default { name: "Home" }
</script>

<template>
    <div class="home">
        <!--小球轨道动画 -->
        <div class="ivEMfk9ulAFRBn22">
            <!-- 主题蒙版 -->
            <div :class="[home.temS ? 'nav-theme-dark' : 'nav-theme-light']"></div>
            <!-- 通过引入的动画部分 -->
            <Lottie v-if="!ivEMfk9ulAFRBn22Show"></Lottie>
            <!-- <div v-show="ivEMfk9ulAFRBn22Show"><Spline id="ivEMfk9ulAFRBn22" @spline-loaded="loaded" scene="https://prod.spline.design/ivEMfk9ulAFRBn22/scene.splinecode" /></div> -->
            <!-- 文字部分 -->
            <div class="ivEMfk9ulAFRBn22-text">
                <div class="ivEMfk9ulAFRBn22-text-title">Welcome To Utility</div>
                <div class="ivEMfk9ulAFRBn22-text-subtitle">尤特网是一个由社区和个体驱动的非盈利组织</div>
                <div class="ivEMfk9ulAFRBn22-text-subtitle">构建划时代的并行计算网络</div>
                <div class="ivEMfk9ulAFRBn22-text-subtitle">用于支撑人工智能超大模型如GPT和BERT等的训练和推理</div>
            </div>
        </div>
        <!--小球轨道动画 -->
        <div class="container">
            <div class="card">
                <div class="card-title">How to start</div>
                <div class="card-body">
                    <div class="card-item"> </div>
                    <div class="card-item"> </div>
                    <div class="card-item"> </div>
                    <div class="card-item"> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.home {
    height: 100%;

    .ivEMfk9ulAFRBn22 {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 730px;
        background: #f2f3f2;

        .nav-theme-light,
        .nav-theme-dark {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 730px;
            z-index: 998;
            pointer-events: none;

            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 500px;
                z-index: 998;
            }
        }

        .nav-theme-light {
            background: linear-gradient(0deg, rgba(217, 217, 217, 0) 0%, #bfffd294 100%);

            &::before {
                background: linear-gradient(180deg, #00000000 70%, #f2f3f2 100%);
            }
        }

        .nav-theme-dark {
            background: linear-gradient(0deg, #00000000 50%, #00000000 50%, #1e1e1ed6 100%);

            &::before {
                background: linear-gradient(180deg, #00000000 0%, #00000000 0%, #1e1e1e 100%);
            }
        }

        .ivEMfk9ulAFRBn22-text {
            padding: 0 10px;
            pointer-events: none;
            position: absolute;
            z-index: 998;
            bottom: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: Manrope-Regular;

            .ivEMfk9ulAFRBn22-text-title {
                text-align: center;
                font-size: 40px;
                line-height: 48px;
                font-weight: 600;
                margin-bottom: 20px;
            }

            .ivEMfk9ulAFRBn22-text-subtitle {
                text-align: center;
                font-size: 20px;
                line-height: 24px;
                font-weight: 400;
                margin-bottom: 10px;
            }
        }
    }

    .container {
        margin-top: 100px;

        .card {

            .card-title {
                font-weight: 700;
                font-size: 24px;
                line-height: 29px;
                text-align: center;
            }

            .card-body {
                padding-top: 25px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;

                .card-item {
                    background: #D9D9D9;
                    border-radius: 25px;
                    width: 576px;
                    height: 576px;
                    margin: 0 40px 30px;
                    filter: drop-shadow(-2px -2px 12px rgba(0, 0, 0, 0.12)) drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.12));
                }
            }
        }
    }
}
</style>
