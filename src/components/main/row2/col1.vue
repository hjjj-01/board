<template>
    <div class="row2-col1">
        <div class="title">当日班次效率</div>
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
    const datas= ref([
        {name:'一车间A班',data:getrandom2(2,88,92)},
        {name:'一车间B班',data:getrandom2(2,88,92)},
        {name:'二车间A班',data:getrandom2(2,88,92)},
        {name:'二车间B班',data:getrandom2(2,88,92)},
        {name:'三车间A班',data:getrandom2(1,88,92)},
        {name:'三车间B班',data:getrandom2(1,88,92)},
    ])

    onMounted(()=>{
        const series=datas.value.map((item,index)=>({
            name:item.name,
            type:'bar',
            data:item.data,
            itemStyle:{
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset:0,color:index%2===0 ? '#2E70CB' : '#91CC75'},
                    {offset:1,color:index%2===0 ? '#53BAA8' : '#FFDC60'}
                ]),
                barBorderRadius:[8,8,0,0]
            },
            
        }))
        const mychart = echarts.init(chart.value)
        mychart.setOption({
            right: '5%',
            top: '5%',
            tooltip:{
                trigger:'item',
                position:'top',
                //a series name, b x name, c value, d percent
                formatter:'{a} <br/>车间效率 : {c}%',
                textStyle:{
                    fontSize:nowSize(12)
                }

            },
            xAxis:{
                type:'category',
                data:['经编车间','整经车间']   ,
                axisLabel:{
                   color:'#fff',
                   fontSize:nowSize(14)
               }             
            },
            
            yAxis:{
                type:'value',
                name:'效率(%)',
                axisLabel:{
                    color:'#fff',
                    fontSize:nowSize(14)
                },
               axisLine:{show:true,lineStyle:{color:'#fff'}},
               splitLine:{show:false}
            },
            legend:{
                show:true,
                data:['一车间A班','一车间B班'],
                orient:'horizontal',
                itemHeight:nowSize(10),
                itemWidth:nowSize(14),
                textStyle:{
                    color:'#fff',
                    fontSize:nowSize(13)    
                    
                },
               
            },
            grid: {
                left: '13%',
                right: '-10%',
                top: '20%',
                bottom: '12%',
            },
            series
        })

        let Index1 = 0
        let Index2 = 0
         const Interval= setInterval(()=>{
            mychart.dispatchAction({
                type: 'showTip',
                seriesIndex: Index1,
                dataIndex: Index2
            })

            if(Index1<6 && Index2<1){
                Index1++
            }else{
                if(Index1==6 && Index2==0){
                    Index1 = 0
                    Index2=(Index2+1)%2
                }else{
                    if(Index2==1&&Index1<6){
                        Index1++
                }else{
                     Index1 = 0
                     Index2 = 0
                }
                
            }
        }
        },2000)
        onUnmounted(()=>{
            clearInterval(Interval)
        })

    })
</script>
<style scoped>
    .row2-col1{
        width: 100%;
        height: 27vh;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .title {
        padding-left: 1vw;
        height: 3vh;
        width: 15.3vw;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
        color: aliceblue;
        line-height: 3vh;
        font-family: 'Microsoft YaHei';
    }
    .chart{
        width: 100%;
        height: 89%;
    }
</style>