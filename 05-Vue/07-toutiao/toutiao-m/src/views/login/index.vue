<template>
  <div class="login-container">
    <!-- 1.头部 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 2.中间 -->
    <van-form @submit="onSubmit">
      <van-field
        name="用户名"
        placeholder="请输入用户名">
        <i slot="left-icon" class="toutiao toutiao-shouji">
        </i>
      </van-field>
      <van-field
        type="password"
        name="验证码"
        placeholder="请输入验证码"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma">
        </i>
        <template #button>
          <van-button class="send-sms-btn" round size="small" type="default">发送验证码</van-button>
        </template>
      </van-field>
    <div class="login-btn-wrap">
      <van-button class="login-btn" block type="info" native-type="submit">登录</van-button>
    </div>
</van-form>

  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  .toutiao{
    font-size: 37px;
  }
}

.send-sms-btn{
  background-color: #ededed;
  width: 152px;
  height: 46px;
  line-height: 46px;
  font-size: 22px;
  color: #666;
}
.login-btn-wrap{
  padding: 53px 33px;
}

.login-btn{
  background-color: #6db4fb;
  border: none;
}
</style>
