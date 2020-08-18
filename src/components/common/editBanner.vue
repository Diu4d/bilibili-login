<template>
  <div class="editbanner">
    <span>{{left}}</span>
    <span><slot name="right"></slot></span>
  </div>
</template>

<script>
export default {
  props:['left','right']
}
</script>

<style>
  .editbanner{
    background-color: white;
    padding: 4.167vw;
    font-size: 3.889vw;
    color: #333;
    border-bottom: 0.278px solid #fafafa;
    display: flex;
    justify-content: space-between;
  }
</style>