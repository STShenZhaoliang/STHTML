<template>
  <div>
    <!-- 介绍 -->
    <he-init v-show="false"></he-init>
    <!-- 组件化应用构建 -->
    <he-world  v-show="false" v-for='(todo, index) in todos' :key="index" :todo="todo"></he-world>
    <!--  -->
    <HeTemplate></HeTemplate>
  </div>
</template>

<script>
import HeWorld from './components/HeWorld'
import HeInit from './components/HeInit'
import HeTemplate from './components/HeTemplate'
export default {
  name: 'App',
  data: function() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  components: {
    HeWorld,
    HeInit,
    HeTemplate
  },
  // 生命周期钩子
  created(){
    // `this` 指向 vm 实例
    console.log("created---");
  },
  mounted() {
    console.log("mounted---");
  },
  updated() {
    console.log("updated---");
  },
  unmounted() {
    console.log("unmounted---");
  },
}
</script>

<style>

</style>
