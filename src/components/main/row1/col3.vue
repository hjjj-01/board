<template>
    <div class="row1-col3">
         <div class="title">布匹种类生产和库存比例图</div>
         <div ref="chart1" class="chart1"></div>
         <div ref="chart2" class="chart2"></div>
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
     const chart2 =ref(null)
     const data1 = ref([
                     {name:'非织造布',value:getrandom1(1,200000,250000)},
                     {name:'经编网布',value:getrandom1(1,100000,120000)},
                     {name:'纬编网布',value:getrandom1(1,200000,250000)},
                     {name:'差别化涤纶短纤',value:getrandom1(1,100000,150000)},
                 ])
    const data2 = ref([
                     {name:'非织造布',value:getrandom1(1,200000,250000)},
                     {name:'经编网布',value:getrandom1(1,100000,120000)},
                     {name:'纬编网布',value:getrandom1(1,200000,250000)},
                     {name:'差别化涤纶短纤',value:getrandom1(1,100000,150000)},
                 ])    
   
     onMounted(()=>{
         const mychart1 = echarts.init(chart1.value)
         const mychart2 = echarts.init(chart2.value)
         const series = data2.value.map((item,index)=>({
                name:item.name,
                type:'bar',
                data:item.value,
                barWidth: nowSize(25),    
                itemStyle:{
                    barBorderRadius:[0,nowSize(10),nowSize(10),0],
                },
                label:{
                    show:true,
                    color:'#000',
                },
                  
        }))

         mychart1.setOption({
            title:{
                text:'布匹生产(吨)',
                top:'20%',
                left:'5%',
                textStyle:{
                    color:'#fff',
                    
                }
            },
             tooltip: {
                 trigger: 'item',
                 formatter: '{b}: {c} ({d}%)',
             },
             legend:{
                 orient:'horizontal',
                 left: 'left',
                 data:['非织造布','经编网布','纬编网布','差别化涤纶短纤'],
                 itemHeight:nowSize(12),
                 itemWidth:nowSize(24),
                 textStyle:{
                     color:'#fff',
                     fontSize:nowSize(12),
                 },
                 left:'2%',
                 top:'2%',
                 formatter: (name) => {
                     const item = data1.value.find(d => d.name === name); 
                     return item ? `${name}: ${item.value}` : name; }
             },
             graphic:{
                 type:'image',
                 style:{
                     image:'/zs1.png',
                     width:nowSize(220), 
                     height:nowSize2(40),
                     x:nowSize(60),
                     y:nowSize2(255),
                 }
             },
             series:[{
                 name:'pie',
                 type:'pie',
                 radius:['35%','55%'],
                //  left:'%',
                 top:'2%',
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
                 data:data1.value,
 
             }]
         })
         mychart2.setOption({
            title:{
                text:'布匹库存(吨)',
                top:'20%',
                left:'25%',
                textStyle:{
                    color:'#fff',
                }
            },
            legend:{
                show:true,
                data:['非织造布','经编网布','纬编网布','差别化涤纶短纤'],
                textStyle:{
                    color:'#fff',
                    fontSize:nowSize(12)

                },
            },
            
            yAxis:{                
                type:'category',
                data:[1],
                splitLine:{
                    show:false,
                },
                axisLine:{
                    show:true,
                },
                axisLabel:{
                    show:false
                },
                boundaryGap:false,
                barCategoryGap: '30%',
                barGap: '20%',
            },
            xAxis:{
                type:'value',
                label:{
                    show:false,
                },
                splitLine:{
                    show:false,
                },
                axisLine:{
                    show:false,
                },
                axisLabel:{
                    show:false
                },
                
            
            },
            grid:{
                bottom:'10%',
                top:'40%',
                left:'10%'
            },
            series
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
                dataIndex: (Index-1+4)%4
            })


             Index=(Index+1)%4
         },2000)
         onUnmounted(()=>{
             clearInterval(interval)
         })
         console.log(data2.value)
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
         width: 93.5%;
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
         width: 53.5%;
         height: 100%;
         /* background-color: antiquewhite; */
     }
     .chart2{
         float: right;
         width: 46.5%;
         height: 27vh;
         /* background-color: antiquewhite; */

     }

 </style>