<script lang="ts" setup name="Home">
import MainStore from '@/store'
import { nextTick, ref } from 'vue';
const { home } = MainStore() //使用store

//! 下面部分为引入方式导入动画
const ivEMfk9ulAFRBn22Show = ref(false) // 小球轨道动画显示
function loaded(Spline: any) { // 小球轨道动画加载完成后执行
    Spline.setZoom(1.4);
    Spline.setBackgroundColor('#f1f2f1')
    ivEMfk9ulAFRBn22Show.value = true
}
let ivEMfk9ulAFRBn22: HTMLCanvasElement
// dom加载完成后执行
nextTick(() => {
    getWindowInfo()
    ivEMfk9ulAFRBn22 = document.getElementById('ivEMfk9ulAFRBn22') as HTMLCanvasElement
    setTimeout(() => {
        ivEMfk9ulAFRBn22.style.height = 730 + 'px'
    }, 500)
})
//? cardItem 动画的函数
function cardItemFun(Spline: any) {
    if (!home.temS) {
        Spline.setBackgroundColor('#f1f1f1')
    } else {
        Spline.setBackgroundColor('#525252')
    }
}
function yoZEKkDaaM4Bf0Lc(Spline: any) {
    home.homeObj.yoZEKkDaaM4Bf0Lc = Spline
    cardItemFun(Spline)
    getWindowInfo()
}
function YFmYddqszej3kVrS(Spline: any) {
    home.homeObj.YFmYddqszej3kVrS = Spline
    cardItemFun(Spline)
    getWindowInfo()
}
function SgyiTMMFrboWvNt2(Spline: any) {
    home.homeObj.SgyiTMMFrboWvNt2 = Spline
    cardItemFun(Spline)
    getWindowInfo()
}
function k4JRyXh7Gy1jhj(Spline: any) {
    home.homeObj.k4JRyXh7Gy1jhj = Spline
    cardItemFun(Spline)
    getWindowInfo()
}
const cardyoZEKkDaaM4Bf0Lc = ref({ offsetWidth: Number }) // cardItem 动画的dom
const cardyozeArr = [ // cardItem 动画的id
    'yoZEKkDaaM4Bf0Lc',
    'YFmYddqszej3kVrS',
    'SgyiTMMFrboWvNt2',
    'k4JRyXh7Gy1jhj',
]
const cardYozH = ref()
//? cardItem 动画的函数
const getWindowInfo = () => {
    const width = cardyoZEKkDaaM4Bf0Lc.value.offsetWidth
    cardYozH.value = width + 'px'
    cardyozeArr.forEach((item) => {
        document.getElementById(item)!.style.width = width + 'px'
        document.getElementById(item)!.style.borderRadius = '25px'
        document.getElementById(item)!.style.height = width + 'px'
    })
};
let resize = window.addEventListener('resize', getWindowInfo);
// 页面加载解析完成后执行
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
            <div v-show="ivEMfk9ulAFRBn22Show">
                <Spline id="ivEMfk9ulAFRBn22" @spline-loaded="loaded"
                    scene="https://prod.spline.design/ivEMfk9ulAFRBn22/scene.splinecode" />
            </div>
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
                    <div ref="cardyoZEKkDaaM4Bf0Lc" :class="['card-item', home.temS ? 'dark' : '']"
                        :style="{ height: cardYozH }">
                        <div class="card-item-text">
                            <div class="card-item-text-title">选择钱包</div>
                            <div class="card-item-text-subtitle">你可以通过钱包</div>
                            <div class="card-item-text-subtitle">链接尤特网并管理资金</div>
                        </div>
                        <Spline id="yoZEKkDaaM4Bf0Lc" @spline-loaded="yoZEKkDaaM4Bf0Lc"
                            scene="https://prod.spline.design/yoZEKkDaaM4Bf0Lc/scene.splinecode" />
                    </div>
                    <div :class="['card-item', home.temS ? 'dark' : '']" :style="{ height: cardYozH }">
                        <div class="card-item-text">
                            <div class="card-item-text-title">获取UNC</div>
                            <div class="card-item-text-subtitle">尤特是尤特网的货币</div>
                            <div class="card-item-text-subtitle">你可以部署训练</div>
                            <div class="card-item-text-subtitle">和AI应用时使用它</div>
                        </div>
                        <Spline id="YFmYddqszej3kVrS" @spline-loaded="YFmYddqszej3kVrS"
                            scene="https://prod.spline.design/YFmYddqszej3kVrS/scene.splinecode" />
                    </div>
                    <div :class="['card-item', home.temS ? 'dark' : '']" :style="{ height: cardYozH }">
                        <div class="card-item-text">
                            <div class="card-item-text-title">参与mining</div>
                            <div class="card-item-text-subtitle">挖去UNC</div>
                            <div class="card-item-text-subtitle">提供算力支持</div>
                            <div class="card-item-text-subtitle">平衡整个网络共识</div>
                            <div class="card-item-text-subtitle">获取激励</div>
                        </div>
                        <Spline id="SgyiTMMFrboWvNt2" @spline-loaded="SgyiTMMFrboWvNt2"
                            scene="https://prod.spline.design/SgyiTMMFrboWvNt2/scene.splinecode" />
                    </div>
                    <div :class="['card-item', home.temS ? 'dark' : '']" :style="{ height: cardYozH }">
                        <div class="card-item-text">
                            <div class="card-item-text-title">开始构建</div>
                            <div class="card-item-text-subtitle">在尤特网内使用pytorch/tensorflow</div>
                            <div class="card-item-text-subtitle">开发并部署去中心模型</div>
                            <div class="card-item-text-subtitle">我们有文档与教程可供参考</div>
                            <div class="card-item-text-subtitle">也可以在社区门户中看更多信息</div>
                        </div>
                        <Spline id="k4JRyXh7Gy1jhj" @spline-loaded="k4JRyXh7Gy1jhj"
                            scene="https://prod.spline.design/0k4JRyXh-7Gy1jhj/scene.splinecode" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.home {
    min-height: 2000px;

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
        padding: 0 30px;

        .card {
            height: 100%;

            .card-title {
                font-weight: 700;
                font-size: 24px;
                line-height: 29px;
                text-align: center;
                font-family: Manrope-Regular;
            }

            .card-body {
                height: 100%;
                padding-top: 25px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;


                .card-item {
                    background: #f1f1f1;
                    border-radius: 25px;
                    max-width: 576px;
                    width: 100%;
                    margin-bottom: 30px;
                    filter: drop-shadow(-2px -2px 6px rgba(0, 0, 0, 0.12)) drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.12));

                    &:nth-child(2n) {
                        margin-left: 80px;
                    }

                    .card-item-text {
                        position: absolute;
                        padding-left: 30px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        height: 100%;
                        width: 50%;

                        .card-item-text-title {
                            font-weight: 400;
                            font-size: 24px;
                            line-height: 29px;
                            margin-bottom: 20px;
                        }

                        .card-item-text-subtitle {
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 150%;
                            white-space: nowrap;
                        }
                    }
                }

                .dark {
                    background: #525252 !important;
                }
            }
        }
    }
}
</style>
