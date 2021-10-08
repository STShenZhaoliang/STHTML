<template>
<div>
<!-- Data Property -->
  <div>{{count}}</div>
  <!-- 方法 -->
  <button @click="increment">click</button>
</div>

</template>

<script>
export default {
    name: "HeData",
    data(){
        return {
            count: 4
        }
    },
    methods: {
        increment(){
            this.count++
        }
    }
}
</script>

<style>

</style>