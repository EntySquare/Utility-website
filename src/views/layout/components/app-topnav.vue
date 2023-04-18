<script lang="ts" setup>
import util from "@/utils";
import MainStore from '@/store'
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
const { home } = MainStore() //使用store
let { themeShow } = storeToRefs(home)
const themeSh = ref(false);      // 主题显示
themeSh.value = util.getTheme(); // 获取主题
themeShow.value = themeSh.value
function changeTheme() {           // 切换主题
    themeSh.value = util.setTheme(); // 设置主题
    themeShow.value = themeSh.value
}
</script>
<script lang="ts">
export default { name: "AppTopnav" }
</script>
<template>
    <nav class="app-topnav">
        <!-- 左右居中 -->
        <div class="container">
            <!-- 左侧 -->
            <div class="nav-left">
                <router-link class="logo" to="/">
                    <div class="logo-img"></div>
                    <div class="logo-title">Utility</div>
                </router-link>
                <div class="nav-bar">
                    <RouterLink class="nav-bar-item" to="/">Learn</RouterLink>
                    <RouterLink class="nav-bar-item" to="/">Developers</RouterLink>
                    <RouterLink class="nav-bar-item" to="/">Enterprise</RouterLink>
                    <RouterLink class="nav-bar-item" to="/">Community</RouterLink>
                </div>
            </div>
            <!-- 右侧 -->
            <div class="nav-right">
                <div class="search"></div>
                <div class="theme" @click="changeTheme" :style="{ background: themeSh ? '' : '' }">
                    <i class="iconfont icon-dark" v-if="themeSh"></i>
                    <i class="iconfont icon-light" v-else></i>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="less">
.app-topnav {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 90px;


    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        height: 100%;

        .nav-left {
            height: 100%;
            display: flex;
            align-items: center;

            .logo {
                height: 100%;
                display: flex;
                align-items: center;
                text-decoration: none;

                .logo-img {
                    width: 52px;
                    height: 60px;
                    background: url('@/assets/logo.png') no-repeat;
                    background-size: contain;
                }

                .logo-title {
                    font-size: 24px;
                    font-weight: 600;
                    margin-left: 10px;
                }
            }

            .nav-bar {
                height: 100%;
                margin-left: 20px;
                display: flex;
                align-items: center;

                .nav-bar-item {
                    height: 100%;
                    padding: 0 10px;
                    font-size: 20px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    text-decoration: none;

                    &:hover {
                        background: linear-gradient(90deg, #005eff10 0%, #ff00ae10 100%);
                    }
                }
            }

            a {
                color: #000 !important;
            }
        }

        .nav-right {
            height: 100%;
            display: flex;
            align-items: center;

            .search {
                // width: 40px;
                // height: 40px;
                // background: #f5f5f5;
                // border-radius: 50%;
                // margin-right: 20px;
            }

            .theme {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                .icon-light {
                    color: yellow;
                    text-shadow: 0 0 8px #ff0000;
                }

                .icon-dark {
                    text-shadow: 0 0 8px #fbff05;
                    color: rgb(130, 224, 255);
                }

                i {
                    font-size: 25px;
                }
            }
        }
    }
}
</style>
