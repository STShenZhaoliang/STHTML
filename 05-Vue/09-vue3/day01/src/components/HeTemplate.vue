<template>
<div>
  <!-- 文本 -->
  <span>Message: {{ msg }}</span><br>
  <span v-once>这个将不会改变: {{ msg }}</span>

  <!-- 原始 HTML -->
  <p>Using mustaches: {{ rawHtml }}</p> 
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <!-- Attribute -->
  <div :id="dynamicId">dynamicId-ID</div>
  <button :disabled="isButtonDisabled">按钮</button>

<!-- 使用 JavaScript 表达式 -->
    <div>{{ number + 1 }}</div>
    <div>{{ ok ? 'YES' : 'NO' }}</div>
    <div>{{ msg.split('').reverse().join('') }}</div>
    <div :id="'list-' + dynamicId"></div>

    <!--  这是语句，不是表达式：-->
<!-- {{ var a = 1 }} -->

<!-- 流控制也不会生效，请使用三元表达式 -->
<!-- {{ if (ok) { return message } }} -->

<!-- 指令 -->
<a v-bind:href="url">百度</a>
<a v-bind:href="url1()">百度</a>

<a v-on:click="doSomething"> doSomething </a>

<!-- 动态参数 -->
<!--
注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。
-->
<a v-bind:[attributeName]="url"> ... </a>
<a v-on:[eventName]="doSomething"> ... </a>

<!-- 修饰符 -->
<form v-on:submit.prevent="onSubmit">...</form>

<!-- v-bind 缩写 -->
<!-- 完整语法 -->
<a v-bind:href="url"> ... </a>

<!-- 缩写 -->
<a :href="url"> ... </a>

<!-- 动态参数的缩写 -->
<a :[key]="url"> ... </a>

<!-- v-on 缩写 -->
<!-- 完整语法 -->
<a v-on:click="doSomething"> ... </a>

<!-- 缩写 -->
<a @click="doSomething"> ... </a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
</div>
</template>

<script>
export default {
    name: 'HeTemplate',
    data: function(){
        return {
            msg: "123456",
            rawHtml: '<span style="color: red">This should be red.</span>',
            dynamicId: "stid",
            isButtonDisabled: true,
            number: 5,
            ok: false,
            url: "https://www.baidu.com/",
            attributeName: "href",
            eventName: "click"
        }
    },
    mounted(){
        setTimeout(() => {
            this.msg = "1222"
        }, 1000);
    },
    methods: {
        url1: function(){
            return "https://www.baidu.com/"
        },
        doSomething: function(){
            alert("doSomething");
        }
    }

}
</script>

<style>

</style>