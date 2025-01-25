<template>
  
    <div class="index">
      <div class="header">
        <div id="date">{{ now }}</div>
        <div id="title">港益集团中控台</div>
        <div id="company">
          <div class="co"></div>
          <!-- <div :style="{fontFamily:'微软雅黑'}">港丰事业部</div>          -->
        </div>
        <div id="control">
          <span class="active">生产监控</span>
          <span>预警监控</span>
          <span>机台监控</span>
        </div>
      </div>
      <div class="main">
        <!-- <Header /> -->
        <Main />
      </div>
    </div>
</template>
<script setup>
/////////////////////////////
  import Header from './components/header/header.vue'
  import Main from './components/main/main.vue'
  import { ref,onMounted,onUnmounted   } from 'vue'
  let now =ref( new Date().toLocaleString())

  const getdate=()=>{
     now.value = new Date().toLocaleString()
  }
  onMounted(()=>{
    const timer = setInterval(()=>{
            getdate();
    },1000)
    const timer2 = setInterval(()=>{
      function refresh(){
          location.reload();
      }
      refresh();
    },1000*60*60*24) 
    onUnmounted(()=>{
        clearInterval(timer)
        clearInterval(timer2)
    })
  })


</script>
<style scoped>
  .index {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(./assets/src/大标题背景.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: flex;
    /* background-color: aquamarine; */
  }
  .header {
    height: 8.5vh;
  }
  #date {
    float: left;
    padding-left: 3vw;
    width: 32.5vw;
    font-size: 2vh;
    color: white;
    line-height: 8vh !important;
    text-align: left;
    /* background-color: antiquewhite; */
  }
  #title{
    float: left;
    width: 30vw;
    font-size: 4vh;
    line-height: 8vh;
    text-align: center;
    color: white;
    font-family: '宋体';
    /* background-color: aqua; */
  }
  #company{
    float: left;
    height: 8vh;
    width: 12.1vw;
    font-size: 1.5vh;
    line-height: 7vh;
    color: white;
    text-align: left;
    font-family: '宋体';
    /* background-color: yellowgreen; */
    
  }
  .co{
    height: 2.8vh;
  }
  #control{
    float: left;
    width: 21vw;
    font-size: 1.5vh;
    color: white;
    line-height: 8vh;
    text-align: right;
    font-family: '微软雅黑';
    /* background-color: darkorchid; */
    
  }
  span{
    margin-right: 6px;
    width: 3vw;
    height: 3vh;
    border: 5px solid rgb(29, 67, 172);
    background-color:rgb(29, 67, 172) ;
  }
  .active{
    margin-right: px;
    width: 3vw;
    height: 3vh;
    border: 5px solid rgb(196, 47, 67);
    background-color:rgb(196, 47, 67) ;
  }
  .main {
    float: left;
  }
</style>