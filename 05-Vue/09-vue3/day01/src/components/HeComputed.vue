<template>
  <div>
    <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

  <!-- 基本例子 -->
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>

  <!-- 计算属性的 Setter -->
  <div>{{fullName}}</div>

  <!-- 侦听器 -->
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>

  <!-- 计算属性 vs 侦听器 -->
  <div>{{fullName}}</div>
  <label>
    <input v-model="firstName">
  </label>
  </div>
</template>
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<!--  <script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script> -->
<script>
export default {
    name: 'HeComputed',
    data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      firstName: 'firstName',
      lastName: 'lastName',
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  computed: {
    // 计算属性的 getter
    publishedBooksMessage() {
      // `this` 指向 vm 实例
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },

    fullName: {
      // getter
      get() {
        console.log("computed - get" + this.firstName);
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        console.log("computed - set" + newValue);
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    // question(newQuestion, oldQuestion) {
    //   if (newQuestion.indexOf('?') > -1) {
    //     this.getAnswer()
    //   }
    // }
    firstName(val) {
      console.log("watch" + val);
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  methods: {
    // getAnswer() {
    //   this.answer = 'Thinking...'
    //   axios.get('https://yesno.wtf/api').then(response => {
    //         this.answer = response.data.answer
    //     }).catch(error => {
    //     this.answer = 'Error! Could not reach the API. ' + error
    //     }
    //   )
    // }
  }
}
</script>