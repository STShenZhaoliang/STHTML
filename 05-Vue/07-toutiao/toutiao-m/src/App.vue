<template>
  <div id="app">
    <h1>hello st</h1>
    <div class="toutiao toutiao-dianzan"></div>
    <van-button type="primary">主要按钮</van-button>
    <van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less"></style>
