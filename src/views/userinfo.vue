<template>
  <div class="userinfo">
    <navbar></navbar>
    <img src="../assets/pic2.jpg" alt="" class="backimg">
    <user-datail :userInfo="model"></user-datail>
  </div>
</template>

<script>
import Navbar from '../components/userComponent/Navbar'
import userDatail from '../components/userComponent/userDetail'
export default {
  data(){
    return{
      model:{}
    }
  },
  components:{
    Navbar,
    userDatail
  },
  methods:{
    async UserinfoData(){
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
    }
  },
  created(){
    this.UserinfoData()
  }
}
</script>

<style>
  .backimg{
    height: 91px;
    width: 100%;
  }
</style>