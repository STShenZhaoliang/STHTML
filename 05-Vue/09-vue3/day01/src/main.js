import { createApp } from 'vue'
import App from './App.vue'

const vm = createApp(App).mount('#app')
console.log(vm);
// 组件实例 property
console.log(vm.todos);
