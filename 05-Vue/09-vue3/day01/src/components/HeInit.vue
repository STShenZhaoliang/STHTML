<template>
  <div>
    <!-- 起步 -->
    Counter: {{ counter }}<br>
    <!-- 声明式渲染 -->
    <span :title="msg"><br>
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <!-- 处理用户输入 -->
    <p>{{ msg }}</p>
    <button @click="reverseMessage">反转 msg</button>

    <input v-model="msg"><br>

    <!-- 条件与循环 -->
    <span v-if="seen">现在你看到我了00</span>
    <span v-else>现在你看到我了11</span>
    
    <ol>
      <li v-for='(todo, index) in todos' :key="index">
        {{ todo.text }}
      </li>
    </ol>

  </div>
</template>

<script>
export default {
  name: 'HeInit',
  data: function() {
    return {
      counter: 100,
      msg: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: false,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  methods: {
    reverseMessage: function(){
      this.msg = this.msg
        .split('')
        .reverse()
        .join('')
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
}
</script>

<style>

</style>