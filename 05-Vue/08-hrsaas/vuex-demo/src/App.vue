<template>
  <div id="app">
    <child-a></child-a>
    <hr>
    <child-b></child-b>
  </div>
</template>

<script>
import ChildA from './components/child-a'
import ChildB from './components/child-b'
export default {
  name: 'App',
  components: {
    ChildA,
    ChildB
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
