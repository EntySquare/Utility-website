// 管理分类导航的数据
import { defineStore } from 'pinia'
let useHomeStore = defineStore('home', {
  state: () => ({
    themeShow: false,
    homeObj: {
      setBackgroundColor: (color: string) => { }
    },
  }),
  actions: {
    setBackgroundColor() { }
  },
  getters: {
    temS: state => state.themeShow

  }
})
export default useHomeStore

