<template>
  <div>
      <button @click="addCount(10)">数量{{num}}</button><br>
      <span>原始形式：{{$store.state.count}}</span><br>
      <span>计算属性形式0：{{$store.state.count}}</span>
      <span>计算属性形式0：{{$store.state.count}}</span><br>

      <span>计算属性形式1：{{count}}</span>
      <span>计算属性形式1：{{count}}</span><br>

      <button @click="AddAsyncCount">(原始)Async:{{count}}</button> 
      <button @click="getAsyncCount(22)">(辅助)Async:{{count}}</button><br>

      <div>filterList原始形式：{{ $store.getters.filterList }}</div>
      <div>filterList辅助形式：{{ filterList }}</div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default {
    methods: {
        ...mapActions(['getAsyncCount']),
        // addCount: function(){
        //     // this.num++
        //     this.$store.commit('addCount', 10)
        // }
        
        // addCount(){
        //     this.$store.commit('addCount', 10)
        // },
        ...mapMutations(['addCount']),
        AddAsyncCount () {
            // 原始形式 调用action
            this.$store.dispatch('getAsyncCount', 33)
      },
    },
    data: function() {
        return {
            // num : 0
        }
    },
    computed: {
        ...mapState(['count']),
        num: function(){
            return this.$store.state.count
        },
        ...mapGetters(['filterList'])
    }
}
</script>

<style>

</style>