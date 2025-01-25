<template>
    <div class="row1-col3">
         <div class="title">订单情况比例图</div>
         <div ref="chart1" class="chart1">
         </div>

     </div>
 </template>
 <script setup>
     import * as echarts from 'echarts'
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
                     {name:'已完成',value:getrandom1(1,30,50)},
                     {name:'进行中',value:getrandom1(1,100,120)},
                     {name:'待排班',value:getrandom1(1,10,15)},
                 ])
     onMounted(()=>{
         const mychart1 = echarts.init(chart1.value)

         mychart1.setOption({
             tooltip: {
                 trigger: 'item',
                 formatter: '{b}: {c} ({d}%)',
             },
             legend:{
                 orient:'horizontal',
                 left: 'left',
                 data:['已完成','进行中','待排班'],
                 itemHeight:nowSize(12),
                 itemWidth:nowSize(24),
                 textStyle:{
                     color:'#fff',
                     fontSize:nowSize(14),
                 },
                 left:'5%',
                 top:'8%',
                 formatter: (name) => {
                     const item = data.value.find(d => d.name === name); 
                     return item ? `${name}: ${item.value}` : name; }
             },
             graphic:{
                 type:'image',
                 style:{
                     image:'/zs1.png',
                     width:nowSize(220), 
                     height:nowSize2(50),
                     x:nowSize(68),
                     y:nowSize2(240),
                 }
             },
             series:[{
                 name:'',
                 type:'pie',
                 radius:['40%','65%'],
                 left:'12%',
                 bottom:'10%',
                 label:{
                     show:false,
                     color:'#fff',
                     fontSize:15,
                     position:'center',
                 },
                 emphasis:{
                     label:{
                         show:true,
                         fontSize:20,
                         fontWeight:'bold',
                     }
                 },
                 data:data.value,
 
             }]
         })


         let Index=0
         const interval=setInterval(()=>{
             mychart1.dispatchAction({
                 type: 'showTip',
                 seriesIndex: 0,
                 dataIndex: Index
             })
             mychart1.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: Index
            })
            mychart1.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: (Index-1+5)%5
            })


             Index=(Index+1)%5
         },2000)
         onUnmounted(()=>{
             clearInterval(interval)
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
         width: 88%;
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