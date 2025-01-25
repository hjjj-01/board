<template>
    <div class="row1-col1">
        <div class="title">近半年金井分厂生产趋势
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

    const datawf=ref()
    const datadx=ref()
    
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
        datawf.value=getrandom1(6,5000,8000)
        datadx.value=getrandom1(6,11200,14900)


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
                data:['无纺产量','短纤产量'],
                textStyle:{
                    color:'#ffffff',
                    fontSize:nowSize(14)
                },
                top:'6%'
            },
            yAxis:{
                type:'value',
                
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
                top:'20%',
                left:'15%',
                right:'5%',
                bottom:'12%'
            },
            series:[
                {
                    name:'无纺产量',
                    data:datawf.value,
                    type:'line',
                    // smooth:true,
                    label:{
                        show:true,
                        position:'top',
                        color:'#a5b7c2',
                    },
                    areaStyle:{
                        color:new echarts.graphic.LinearGradient(0,0,0,1,[
                            {offset:0,color:'#006eff'},
                            {offset:1,color:'#061731'}
                        ])
                    }

                },
                {
                    name:'短纤产量',
                    data:datadx.value,
                    type:'line',
                    // smooth:true,
                    label:{
                        show:true,
                        position:'top',
                        color:'#a5b7c2',
                    },
                    areaStyle:{
                        color:new echarts.graphic.LinearGradient(0,0,0,1,[
                            {offset:0,color:'#49b67f'},
                            {offset:1,color:'#061731'}
                        ])
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
            Indexseries = (Indexseries+1)%2
            Indexdata = (Indexdata+1)%6
        }, 2000)
        onUnmounted(()=>{
            clearInterval(Interval)
        })
    })


</script>
<style scoped>
     .row1-col1 {
        width:100%;
        height: 30.7vh;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .title {
        padding-left: 2vw;
        height: 3vh;
        width: 80%;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
        color: #ffffff;
        line-height: 3vh;
        font-size: 0.9vw;

        font-family: 'Microsoft YaHei';
    }
    .chart{
        width: 100%;
        height: 89%;
    }
    img{
        width: 1.9vw;
        height: 1.7vw;
        position: absolute;
        left: 42.8vw;
    }
</style>