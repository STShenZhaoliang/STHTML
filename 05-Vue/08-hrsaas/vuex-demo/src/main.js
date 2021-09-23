import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({
  // 放置配置选项
  state: {
    count: 0, // 定义一个count属性
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: {
    // 修改count的方法
    // 载荷  传输的参数
    addCount(state, payload) {
      state.count += payload
      console.log(state.count);
    }
  },
  actions: {
    // context 就是当前的store实例 this.$store.commit
    getAsyncCount(context, count) {
      console.log(context)
        // 模拟异步
      setTimeout(function() {
        context.commit('addCount', count)
      }, 1000)
    }
  },
  getters: {
    filterList: state => state.list.filter(item => item > 5),
    token: state => state.user.token,
    name: state => state.setting.name
  },
  // 模块化
  modules: {
    // 子模块
    user: {
      namespaced: true, // 给true就表示加锁
      state: {
        token: '12345'
      },
      mutations: {
        updateToken(state) {
          state.token = '67890'
        }
      },
      actions: {}
    },
    setting: {
      state: {
        name: 'Vuex实例'
      }
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
