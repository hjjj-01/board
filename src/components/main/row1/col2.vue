<template>
    <div class="row1-col2">
        <div class="title">近半年港丰分部生产趋势
            <img src="/src/assets/src/zs3.png"  alt="">
        </div>
        <div ref="chart" class="chart">

        </div>
    </div>
</template>
<script setup>
    import { ref,onMounted,onUnmounted } from 'vue'
    import *as echarts from 'echarts'
    import {getrandom1} from '@/assets/src/JS/random'
    let nowClientWidth = (document.documentElement.clientWidth);
    function nowSize(val,initWidth=1920){
        return val * (nowClientWidth/initWidth);
    }

    const datajb=ref()
    const datazj=ref()
    const datajk=ref()
    
    const chart = ref(null)
    const getdatearray=()=>{
        let datearr=[]
        const today=new Date()
        for(let i=0;i<6;i++){
            const date=new Date()
            date.setMonth(today.getMonth()-i)
            datearr.unshift(`${date.getMonth()+1}`)
        }
        return datearr
    }
    onMounted(()=>{
        datajb.value=getrandom1(6,5000,7000)
        datazj.value=getrandom1(6,2900,4000)
        datajk.value=getrandom1(6,3600,4500)


        const datearr=getdatearray()

        const mychart=echarts.init(chart.value)
        mychart.setOption({
            tooltip:{
                trigger:'item',
                formatter:'{b}月份产量 : {c}(吨)'
            },
            xAxis:{
                type:'category',
                data:datearr,
                axisLabel:{
                    color:'#ffffff',
                    fontSize:nowSize(14)

                },
                boundaryGap: false
            },
            legend:{
                show:true,
                data:['经编车间产量','贾卡产量','整经车间产量'],
                textStyle:{
                    color:'#ffffff',
                    fontSize:nowSize(14)
                },
                top:'6%'
            },
            yAxis:{
                type:'value',
                min:1000,
                splitLine:{
                    show:false
                },
                axisLine:{
                    show:true
                },
                axisLabel:{
                    color:'#ffffff',
                    fontSize:nowSize(12),
                    margin:15

                }
            },
            grid:{
                top:'25%',
                left:'15%',
                right:'5%',
                bottom:'10%'
            },
           
            series:[
                {
                    name:'经编车间产量',
                    data:datajb.value,
                    type:'line',
                    // smooth:true,
                    label:{
                        show:true,
                        position:'top',
                        color:'#a5b7c2',
                    },
                    areaStyle:{
                        color:new echarts.graphic.LinearGradient(0,0,0,1,[
                            {offset:0,color:'#107ec7'},
                            {offset:1,color:'#061731'}
                        ])
                    },
                    emphasis:{
                        show:true,
                    }

                },
                {
                    name:'整经车间产量',
                    data:datazj.value,
                    type:'line',
                    // smooth:true,
                    label:{
                        show:true,
                        position:'bottom',
                        color:'#a5b7c2',
                    },
                    areaStyle:{
                        color:new echarts.graphic.LinearGradient(0,0,0,1,[
                            {offset:0,color:'#3cff00'},
                            {offset:1,color:'#061731'}
                        ])
                    }
                },
                {
                    name:'贾卡产量',
                    data:datajk.value,
                    type:'line',
                    // smooth:true,
                    label:{
                        show:true,
                        position:'top',
                        color:'#a5b7c2',
                    },
                    areaStyle:{
                        color:new echarts.graphic.LinearGradient(0,0,0,1,[
                            {offset:0,color:'#e69769'},
                            {offset:1,color:'#061731'}
                        ])
                    },
                    lineStyle:{
                        color:'#e69769'
                    }
                }
            ]
        })
        let Indexseries=0
        let Indexdata=0
        const Interval=setInterval(() => {
            mychart.dispatchAction({
                type:'showTip',
                seriesIndex: Indexseries,
                dataIndex: Indexdata
            })

            Indexseries = (Indexseries+1)%3
            Indexdata = (Indexdata+1)%6
        }, 1500)
        onUnmounted(()=>{
            clearInterval(Interval)
        })
    })


</script>
<style scoped>
     .row1-col2 {
        width: 20.4vw;
        height: 30.7vh;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .title {
        padding-left: 1.5vw;
        height: 3vh;
        width: 82%;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
        color: #ffffff;
        line-height: 3vh;
        font-family: 'Microsoft YaHei';
        font-size: 0.9vw;

    }
    .chart{
        width: 100%;
        height: 89%;
    }
    img{
        width: 1.9vw;
        height: 1.7vw;
        position: absolute;
        right: 32.9vw;
    }
</style>