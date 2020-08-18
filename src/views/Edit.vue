<template>
  <div v-if="model" class="editViews">
    <div style="margin-bottom:2.778vw;"><nav-bar></nav-bar></div>
    <div class="uploadfile">
    <edit-banner left="头像">
    </edit-banner>
    </div>
    <edit-banner left="昵称">
      <a href="javascript;" slot="right">{{model.name}}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascript;" slot="right">{{model.username}}</a>
    </edit-banner>
    <edit-banner left="性别"></edit-banner>
    <edit-banner left="个签">
      <a href="javascript;" slot="right">{{model.name}}</a>
    </edit-banner>
  </div>
</template>

<script>
import NavBar from '../components/userComponent/Navbar'
import editBanner from '../components/common/editBanner'
export default {
  data(){
    return{
      model:{}
    }
  },
  components:{
    NavBar,
    editBanner
  },
  methods:{
    async selectUser(){
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
    },
    async afterRead(file){
      const fromdata = new FormData()
      fromdata.append('file',file.file)
      const res = await this.$http.post('/upload',fromdata)
      this.model.user_img = res.data.url
    }
  },
  create(){
    this.selectUser()
  }
}
</script>

<style>

</style>