<template>
    <div>
    <login-top middleTop="登录bilibili">
      <div slot="right" style="font-size:3.611vw" @click="$router.push('/register')">切换到注册</div>
    </login-top>
    <login-text label="账号"
    placeholder="请输入账号"
    style="margin:4.167vw 0"
    rule="^.{6,16}$"
    @inputChange="content => model.username = content"
    ></login-text>
    <login-text label="密码"
    placeholder="请输入密码"
    rule="^.{6,16}$"
    type="password"
    @inputChange="content => model.password = content"
    ></login-text>

    <login-btn btntext="登录" @registerSubmit="AjaxInsert"></login-btn>
  </div>
</template>

<script>
import LoginTop from '../components/common/LoginTop'
import LoginText from '../components/common/LoginText'
import LoginBtn from '../components/common/LoginBtn'
export default {
  data(){
    return{
    model:{
      username:'',
      password:''
    }
    }
  },
  components:{
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods:{
    async AjaxInsert(){
      if (this.model.username && this.model.password){
        const res = await this.$http.post('/login',this.model)
       this.$msg.fail(res.data.msg)
       if(res.data.code == 301 || res.data.code ==302){
         return
       }
       localStorage.setItem('token',res.data.token)
       localStorage.setItem('id',res.data.id)
       setTimeout(() => {
         this.$router.push('/userinfo')
       },1000)
      }else{
        this.$msg.fail('格式不正确')
      }
    }
  }
}
</script>

<style>

</style>