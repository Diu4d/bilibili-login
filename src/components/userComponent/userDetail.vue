<template>
  <div class="userdetail">
    <div class="userdetail_next">
      <div class="user-img">
        <img :src="userInfo.user_img" v-if="userInfo.user_img">
        <img src="../../assets/default_img.jpg" alt="">
        </div>
      <div class="user_edit">
        <div>
          <p> 
            <span>0</span>
            <span class="user_text">粉丝</span>
          </p>
          <p>
            <span>54</span>
            <span class="user_text">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')">
            <div class="user_editBtn">编辑资料</div>
          </div>
        </div>
    </div>
    <div class="user_name">
      <h2>{{userInfo.name}}</h2>
      <p v-if="userInfo.user_desc">{{userInfo.user_desc}}</p>
      <p v-else>阿巴巴巴</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['userInfo']
};
</script>

<style>
  .userdetail{
    background-color: white;
    padding:0 12px;
  }
  .user-img{
    margin-right: 20px;
  }
  .user-img img{
    height: 85px;
    width: 85px;
    border-radius: 50%;
  }
  .user_edit{
    flex: 1;
  }
  .user_edit div:nth-child(1){
    display:flex;
  }
  .user_edit div:nth-child(1) p{
    margin-top: 5px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 13px;
  }
  .user_edit div:nth-child(1) p:nth-child(1),p:nth-child(2){
    border-right: 1px solid #ccc;
  }
  .user_edit div:nth-child(2){
    padding: 2px 10px;
  }
  .userdetail_next{
    display: flex;
  }
  .user_text{
    color: #aaa;
  }
  .user_editBtn{
    margin-top: 10px;
    border: 1px solid #fb7a9f;
    padding: 3px;
    display: flex;
    align-content: center;
    justify-content: center;
    color: #fb7a9f;
    border-radius: 4px;
  }
  .user_name p{
    padding: 0;
    margin: 2.778vw 0;
    color: #999;
  }
  .user_name h2{
    margin: 2.778vw 0 0.833vw 0;
  }
</style>