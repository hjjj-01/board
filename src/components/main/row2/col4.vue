<template>
    <div class="row1-col3">
         <div class="title">客户词云</div>
         <div ref="chart1" class="chart1">
         </div>

     </div>
 </template>
 <script setup>
     import * as echarts from 'echarts'
     import 'echarts-wordcloud';
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

     const chart1 =ref(null)
     const data = ref([
                     {name:'安踏',value:getrandom1(1,50,100)},
                     {name:'耐克',value:getrandom1(1,50,100)},
                     {name:'贵人鸟',value:getrandom1(1,50,100)},
                     {name:'狄耐克',value:getrandom1(1,50,100)},
                     {name:'客户1',value:getrandom1(1,50,100)},
                     {name:'客户2',value:getrandom1(1,50,100)},
                     {name:'客户3',value:getrandom1(1,40,80)},
                     {name:'客户4',value:getrandom1(1,40,80)},
                     {name:'客户5',value:getrandom1(1,40,80)},
                     {name:'客户6',value:getrandom1(1,40,80)},
                     {name:'客户7',value:getrandom1(1,40,80)},
                     {name:'客户7',value:getrandom1(1,40,80)},
                     {name:'客户7',value:getrandom1(1,30,70)},
                     {name:'客户7',value:getrandom1(1,30,70)},
                     {name:'客户7',value:getrandom1(1,30,70)},
                     {name:'客户7',value:getrandom1(1,30,70)},
                     {name:'客户7',value:getrandom1(1,20,60)},
                     {name:'客户7',value:getrandom1(1,20,60)},
                 ])
        function getRandomColor(seed) {
            const blueShade = Math.random();
            // 计算RGB值
            const r = Math.floor(blueShade * 100); 
            const g = Math.floor(blueShade * 100 + 80);
            const b = Math.floor(150 + blueShade * 100); 

            return `rgb(${r},${g},${b})`;
        }
     onMounted(()=>{
         const mychart1 = echarts.init(chart1.value)

         mychart1.setOption({
           
             series:[{
                 type:'wordCloud',
                 gridSize:nowSize(10),
                 sizeRange:[nowSize(13),nowSize(30)],
                 rotationRange:[-90,90],
                 width:nowSize(300),
                 height:nowSize(250),
                 left:nowSize(10),
                 top:nowSize(10),
                 right:nowSize(10),
                 bottom:nowSize(50),
                 textStyle: {
                        color: function (params) {
                            return getRandomColor(params.dataIndex); 
                        }
                },
                data:data.value
             }]
         })


     })
 </script>
 <style scoped>
      .row1-col3{
         width: 100%;
         height: 30.7vh;
         background-image: url(/src/assets/src/tip3.png);
         background-repeat: no-repeat;
         background-position: flex;
         background-size: 100% 100%;
     }
     .title {
         padding-left: 2.1vw;
         height: 3vh;
         width: 87%;
         background-image: url(/src/assets/src/stip1.png);
         background-repeat: no-repeat;
         background-position: center; 
         background-size: 100% 100%;
         color: rgb(255, 255, 255);
         font-size: 0.9vw;
         line-height: 3vh;
         font-family: 'Microsoft YaHei';
     }
     .chart1{
         float: left;
         width: 100%;
         height: 100%;
         /* background-color: antiquewhite; */
     }

 </style>