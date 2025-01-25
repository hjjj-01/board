<template>
    <div class="row1-col3">
         <div class="title">各分部机台运行情况</div>
         <div ref="chart1" class="chart1">
         </div>

     </div>
 </template>
 <script setup>
     import * as echarts from 'echarts'
     import { onMounted, ref ,onUnmounted} from 'vue'
     import { getrandom1 } from '@/assets/src/JS/random'
     import quanzhouJSON from '@/assets/src/JSON/quanzhou.json'

     let nowClientWidth = (document.documentElement.clientWidth);
     let nowClientHeight = (document.documentElement.clientHeight);
     function nowSize(val,initWidth=1920){
         return val * (nowClientWidth/initWidth);
     }
     function nowSize2(val,initHeight=1080){
         return val * (nowClientHeight/initHeight);
     }
 
     const chart1 =ref(null)
     onMounted(()=>{
         echarts.registerMap('quanzhou', quanzhouJSON);
         const mychart1 = echarts.init(chart1.value)
         mychart1.setOption({
             tooltip: {
                 trigger: 'item',
             },
             visualMap: {
                 min: 0,
                 max: 1000,
                 left:'5%',
                 bottom: '7%',
                 text: ['高', '低'],
                 calculable: true,
                 inRange: {
                     color: ['#e0ffff', '#006edd'] // 设置颜色范围
                 },
                 textStyle: {
                     color: 'rgb(190, 210, 219)',
                 }
             },
             series: [
                 {
                     name: '客户订单分布',
                     type: 'map',
                     map: 'quanzhou', 
                     bottom: '15%',
                     left: '22%',
                     top: '5%',
                     right: '5%',
                     label: {
                         show: true,
                         color: '#fff',
                     },
                     itemStyle: {
                         borderColor: '#fff',
                         borderWidth: 1,

                     },
                     
                     emphasis: {
                         label: {
                             show: true,
                             color: '#fff',
                         },
                         itemStyle: {
                             areaColor: '#2a333d',
                             borderColor: '#fff',
                             borderWidth: 1,
                         },
                     },
                     data: [
                         { name: '安溪县', value: getrandom1(1,200,700) },
                         { name: '鲤城区', value: getrandom1(1,200,700) },
                         { name: '晋江市', value: getrandom1(1,700,1000) },
                         { name: '永春县', value: getrandom1(1,200,600) },
                         { name: '南安市', value: getrandom1(1,200,600) },
                         { name: '德化县', value: getrandom1(1,200,600) },
                         { name: '惠安县', value: getrandom1(1,200,600) },
                         { name: '泉港区', value: getrandom1(1,200,600) },
                         { name: '洛江区', value: getrandom1(1,200,600) },
                         { name: '金门县', value: getrandom1(1,200,600) },
                         { name: '石狮市', value: getrandom1(1,200,600) },
                         { name: '丰泽区', value: getrandom1(1,200,600) },

                     ], 
                 }
             ]
         });
         
         let Index=0;
         const interval = setInterval(()=>{
            mychart1.dispatchAction({
                type:'showtip',
                seriesIndex: 0,
                dataIndex: Index,
            })
            Index = (Index+1)%10;
         },1000)
         onUnmounted(()=>{
             clearInterval(interval)
         })

    })
        

     
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
     .chart1{
         float: left;
         width: 100%;
         height: 100%;
         /* background-color: antiquewhite; */
     }

 </style>