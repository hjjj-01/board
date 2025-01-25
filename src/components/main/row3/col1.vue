<template>
    <div class="col3">
        <div class="title">近六个月各厂部生产效率对比图
        </div>
        <div ref="chart" class="chart">

        </div>
    </div>
</template>
<script setup>
    import {ref,onMounted,onUnmounted} from 'vue'
    import * as echarts from 'echarts'
    import {getrandom2} from '@/assets/src/JS/random'
    let nowClientWidth = (document.documentElement.clientWidth);
    function nowSize(val,initWidth=1920){
        return val * (nowClientWidth/initWidth);
    }


    const chart = ref(null)

    const getdatearray=()=>{
        let datearry=[]
        const date = new Date()
        for(let i=0;i<6;i++){
            const dates = new Date()
            dates.setMonth(date.getMonth()-i)
            datearry.unshift(`${dates.getMonth()+1}月`)
        }
        return datearry
    }

    const data = ref([
        {name:'五里总部',value:getrandom2(6,85,93)},
        {name:'港丰分部',value:getrandom2(6,82,90)},
        {name:'金井分布',value:getrandom2(6,85,93)},
        {name:'龙湖分布',value:getrandom2(6,80,88)},
    ])
    const color1=['#2E70CB','#FFDC60','rgb(80, 223, 175)','rgb(37, 34, 212)']
    const color2=['#53BAA8','#91CC75','rgb(27, 138, 123)','#2E70CB']

    onMounted(()=>{
        const datearry = getdatearray()

        const series = data.value.map((item,index)=>({
            name:item.name,
            type:'bar',
            data:item.value,
            // label:{
            //     show:true,
            //     position:'top',
            //     color:'#a5b7c2',
            // },
            itemStyle:{
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: color1[index] }, 
                    { offset: 1, color: color2[index] }  
                ]),
                barBorderRadius:[9,9,0,0],     
            }
        }))

        const mychart = echarts.init(chart.value)
        mychart.setOption({
            xAxis:{
                type: 'category',
                data:datearry,
                axisLabel:{
                    color:'#fff',
                    fontSize:nowSize(14)
                },
            },
            yAxis:{
                type:'value',
                name:'效率(%)',
                min:0,
               axisLabel:{
                    color:'#fff',
                    fontSize:nowSize(14)

                },
               axisLine:{show:true,lineStyle:{color:'#fff'}},
               splitLine:{show:false}
            },
            grid:{
                left: '5%',
                right: '3%',
                top: '20%',
                bottom: '10%',
            },
            legend:{
                data:['五里总部','港丰分部','金井分布','龙湖分布'],
                textStyle:{
                    color:'#fff',
                    fontSize:nowSize(14)

                },
                itemWidth:nowSize(20),
                itemHeight:nowSize(10),
                left:'32%',
                top:'3%'
            },
            tooltip:{
                trigger:'item',
                formatter:'{a} <br/>{b}厂区生产效率 : {c}%',
                position:'top',
                textStyle:{
                    fontSize:nowSize(12)
                }
            },
            series
            
        })
        let Index1 = 0
        let Index2 = 0
        const interval=setInterval(()=>{
            mychart.dispatchAction({
                type:'showTip',
                seriesIndex: Index1, //0 1 2 3
                dataIndex:Index2 // 0 1 2
            })
            if(Index1<4&&Index2<5){
                Index1++
            }else{
                if(Index1==4&&Index2<5){
                    Index1=0
                    Index2++
                }else{
                    if(Index1<4&&Index2==5){
                        Index1++
                       
                    }else{
                        Index1=0
                        Index2=0
                    }
                }
            }
        },1000)
        onUnmounted(()=>{
            clearInterval(interval)
        })
    })

</script>
<style scoped>
    .col3{
        width: 49vw;
        height: 27.5vh;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .title {
        padding-left: 3vw;
        height: 3vh;
        width: 94%;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
        color: rgb(255, 255, 255);
        font-size: 0.9vw;
        line-height: 3vh;
        font-family: 'Microsoft YaHei';
    }
    .chart{
        width: 100%;
        height: 85%;
    }
    img{
        width: 1.9vw;
        height: 1.7vw;
        position: absolute;
        right: 33vw;
    }
</style>