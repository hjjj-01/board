<template>
    <div class="row1-col3">
         <div class="title">各分厂机台运行情况</div>
         <div class="detail" v-for="(item,index) in data">
            <div class="name">{{ item.name }}</div>
            <div class="total">机台总数: {{ item.data1 + item.data2 + item.data3 }}</div>
            <div>
                <span>
                    <div class="run">运行机台数<br/><h2>{{item.data1}}</h2></div>
                </span>
                <span class="run">停机机台数<br/><h2>{{ item.data2 }}</h2></span>
                <span class="run">维修机台数<br/><h2>{{ item.data3 }}</h2></span>
            </div>
         </div>



     </div>
 </template>
 <script setup>
     import { onMounted, ref ,onUnmounted} from 'vue'
     import { getrandom1 } from '@/assets/src/JS/random'

     let nowClientWidth = (document.documentElement.clientWidth);
     let nowClientHeight = (document.documentElement.clientHeight);
     function nowSize(val,initWidth=1920){
         return val * (nowClientWidth/initWidth);
     }
     function nowSize2(val,initHeight=1080){
         return val * (nowClientHeight/initHeight);
     }
     const data = ref([
        {name: '五里总部', data1: 115, data2: 10, data3: 5},
        {name: '港丰分部', data1: 115, data2: 11, data3: 5},
        {name: '金井分部', data1: 115, data2: 12, data3: 5},
        {name: '龙湖分部', data1: 115, data2: 13, data3: 5},
     ])
 
     
 </script>
 <style scoped>
      .row1-col3{
         width: 100%;
         height: 61.8vh;
         background-image: url(/src/assets/src/tip3.png);
         background-repeat: no-repeat;
         background-position: flex;
         background-size: 100% 100%;
     }
     .title {
         padding-left: 2.1vw;
         height: 3vh;
         width: 91.5%;
         background-image: url(/src/assets/src/stip1.png);
         background-repeat: no-repeat;
         background-position: center; 
         background-size: 100% 100%;
         color: rgb(255, 255, 255);
         line-height: 3vh;
         font-family: 'Microsoft YaHei';
         font-size: 0.9vw;

     }

     .detail{
         float: left;
         width: 110%;
         height: 15vh;
         /* background-image: url(/src/assets/src/border1.png);
         background-repeat: no-repeat;
         background-position: flex;
         background-size: 100% 100%; */
         margin-left: -5%;
         margin-top: -1vh;
        }
        .detail:nth-child(2){
            margin-top: -2vh !important;
        }
        .name{
             padding-left: 12vw;
             padding-top: 2.5vh;
             color:aliceblue;
             font-size: 1vw;
        }
        span{
         float: left;
         margin-top: 0.4vh;
         width: 8vw;
         height: 8vh;
         background-image: url(/src/assets/src/border3.png);
         background-repeat: no-repeat;
         background-position: flex;
         background-size: 100% 100%;
         
        }
        span:nth-child(1){
         margin-left: 1.5vw;
        }
        .run{
            color: rgb(255, 255, 255);
            font-size: 1vw;
            line-height: 4vh;
            text-align: center;
        }
        h2{
            margin-top: -0.5vh;
            color: red;
        }
        .total{
             padding-left: 10.6vw;
             color: aliceblue;
             font-size: 1vw;
        }
 </style>