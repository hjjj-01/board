<template>
    <div class="row2-col2">
        <div class="title">近10日生产效率走势图
            <img src="/src/assets/src/zs3.png" alt="">
        </div>
        <div ref="chart" class="chart">

        </div>
    </div>
</template>
<script setup>
    import * as echarts from 'echarts'
    import {ref,onMounted,computed,onUnmounted} from 'vue'
    import {getRandom2} from '@/assets/src/JS/random'
    import { useStore } from 'vuex'
    let nowClientWidth = (document.documentElement.clientWidth);
    function nowSize(val,initWidth=1920){
        return val * (nowClientWidth/initWidth);
    }

    const chart = ref(null)
    const store = useStore();
    const data = ref([])

    
    const getdatearray=()=>{
        const dateArray = [];
        const today = new Date();
        for (let i = 0; i < 10; i++) {
            const date = new Date();
            date.setDate(today.getDate() - i);
            dateArray.unshift(`${date.getMonth() + 1}月${date.getDate()}日`); 
        }
        return dateArray;
        
    }

    onMounted(() => {

        const dateArray=getdatearray()
        //计算平均值
        data.value=getRandom2(10,86,93)
        const sum = data.value.reduce((total,num)=>total+num,0)
        const avarage = (sum/data.value.length).toFixed(2)
        const mychart = echarts.init(chart.value)
        //存储当日效率值
        const nowdata=data.value[9].toFixed(0)
        store.commit('setnow',nowdata)        

        //设置图表
        mychart.setOption({
            tooltip: {
                trigger:'item',
                formatter:'{b}效率<br>{c}%'
            },
            xAxis:{
                type: 'category',
                data:dateArray,
                boundaryGap: false,
                axisLabel:{
                    color: '#fff',
                    fontSize:nowSize(14)
                }
            },
            yAxis:{
                type: 'value',
                name: '效率(%)',
                min:70,
                max:100,
                axisLabel:{
                    color: '#fff',
                    fontSize:nowSize(14)
                },
                axisLine:{show:true,lineStyle:{color:'#fff'}},
                splitLine:{show:false}
            },
            grid:{
                top: '18%',
                left: '7%',
                right: '3%',
                bottom: '12%'
            },
            graphic:[
                {
                    type:'text',
                    right: '15%',
                    top: '10%',
                    style:{
                        text:`平均值：${avarage}%`,
                        fill:'#fff',
                        fontSize:16,
                        fontWeight:'bold'
                    }
                }
            ],
            series:[{
                type: 'line',
                data:data.value,
                
                areaStyle:{
                    color: new echarts.graphic.LinearGradient(0,0,0,1,[
                        {offset:0,color:'#0099FF'},
                        {offset:1,color:'#061731'},
                    ])
                },
                smooth:true,
                label:{
                    show: true,
                    position: 'top',
                    color:'#a5b7c2'
                },
                lineStyle:{
                    color:'#59b8d4',
                },
                markLine:{
                    data:[
                        {
                            name:'平均值',
                            yAxis:avarage,
                            lineStyle:{
                                color:'#fff',
                                width:2,

                            },
                            label:{
                                show:false,
                               
                            }
                        },
                        
                    ]
                }
            }]
        })
        let Index=0
        const Interval=setInterval(() => {
            mychart.dispatchAction({
                type:'showTip',
                seriesIndex: 0,
                dataIndex: Index
            })
            Index=(Index+1)%10
        }, 1500)
        onUnmounted(()=>{
            clearInterval(Interval)
        })
    })
</script>
<style scoped>
    .row2-col2 {
        width: 100%;
        height: 27vh;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .title {
        padding-left: 2vw;
        height: 3vh;
        width: 24vw;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
        color: #ffffff;
        line-height: 3vh;
        font-family: '';
    }
    .chart{
        width: 100%;
        height: 89%;
    }
    img{
        width: 1.9vw;
        height: 1.7vw;
        position: absolute;
        right: 53.5vw;
    }
</style>