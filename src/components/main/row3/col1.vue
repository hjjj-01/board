<template>
    <div class="row3-col1">
        <div class="title">近十五日进出库走势</div>
        <div ref="chart" class="chart">

        </div>
    </div>
</template>
<script setup>
    import { ref,onMounted } from 'vue'
    import *as echarts from 'echarts'
    let nowClientWidth = (document.documentElement.clientWidth);
    function nowSize(val,initWidth=1920){
        return val * (nowClientWidth/initWidth);
    }



    const chart = ref(null)
    const getdatearray=()=>{
        let datearr=[]
        const today=new Date()
        for(let i=0;i<15;i++){
            const date=new Date()
            date.setDate(today.getDate()-i)
            datearr.unshift(`${date.getDate()}`)
        }
        return datearr
    }
    onMounted(()=>{
        const datearr=getdatearray()
        const mychart=echarts.init(chart.value)
        mychart.setOption({
            xAxis:{
                type:'category',
                data:datearr,
                axisLabel:{
                    color:'#ffffff',
                    fontSize:nowSize(14)

                }
            },
            legend:{
                show:true,
                data:['进库量','出库量'],
                textStyle:{
                    color:'#ffffff',
                    fontSize:nowSize(14)
                },
                top:'6%'
            },
            yAxis:{
                type:'value',
                max:100,
                splitLine:{
                    show:false
                },
                axisLine:{
                    show:true
                },
                axisLabel:{
                    color:'#ffffff',
                    fontSize:nowSize(14)

                }
            },
            grid:{
                top:'25%',
                left:'10%',
                right:'5%',
                bottom:'13%'
            },
            series:[
                {
                    name:'进库量',
                    data:[76.33, 81.5, 77.2, 76.33, 72.35, 74.64, 86.98, 76.33, 74.51, 76, 81.21, 82.55, 76.31, 84.1, 81.15 ],
                    type:'line',
                    smooth:true,

                },
                {
                    name:'出库量',
                    data:[61.81, 97.51, 75.15, 61.81, 45.17, 61.81, 24.17, 86.44, 61.81, 59.88, 61.18, 65.15, 53.33, 58.15, 66.66,],
                    type:'line',
                    smooth:true,
                }
            ]
        })
            })


</script>
<style scoped>
     .row3-col1 {
        width: 28.5vw;
        height: 27vh;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .title {
        padding-left: 2vw;
        height: 3vh;
        width: 26.6vw;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
        color: #ffffff;
        line-height: 3vh;
        font-family: 'Microsoft YaHei';
    }
    .chart{
        width: 100%;
        height: 89%;
    }
</style>