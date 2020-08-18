<template>
  <div class="navbar">
    <div class="logo">
      <img src="../../assets/pic.png" alt="">
    </div>
    <div class="second">
      <p>
        <van-icon class="icon" name="search" />
        请输入内容</p>
    </div>
    <div class="pic">
      <img src="../../assets/logo.png" alt="">
      <p>下载App</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .navbar{
    height: 12.5vw;
    background-color: white;
    display: flex;
  }
  .logo{
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .logo img {
    width: 80%;
  }
  .pic img{
    width: 24px;
    height: 24px;
  }
  .pic{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .pic p{
    padding: 5px 10px;
    margin: 0 8px;
    background-color: #fb7299;
    color: white;
    border-radius: 3px;
    font-size: 13px;
  }
  .second{
    flex: 1;
    display: flex;
    align-items: center;
  }
  .second p{
    background-color: #f4f4f4;
    padding: 10px 0;
    line-height: 26px;
    width: 100%;
    border-radius: 10px;
    font-size: 12px;
    color: #aaa;
  }
</style>