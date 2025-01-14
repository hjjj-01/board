<template>
   <div class="col4">
        <div class="title">验布检验数量和等级之间的比例图</div>
        <div ref="chart1" class="chart1">
        </div>
        <div ref="chart2" class="chart2">
        </div>
        <div ref="chart3" class="chart2">
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
    const chart2 =ref(null)
    const chart3 =ref(null)
    const datapro = getrandom1(2,82,87)
    const data = ref([
                    {name:'AA级',value:getrandom1(1,200000,250000)},
                    {name:'A级',value:getrandom1(1,10000,12000)},
                    {name:'CAA级',value:getrandom1(1,2000,2500)},
                    {name:'WAA级',value:getrandom1(1,100,150)},
                ])
    onMounted(()=>{
        const mychart1 = echarts.init(chart1.value)
        const mychart2 = echarts.init(chart2.value)
        const mychart3 = echarts.init(chart3.value)
        mychart1.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)',
            },
            legend:{
                orient:'vertical',
                left: 'left',
                data:['AA级','A级','CAA级','WAA级'],
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
                    image:'/zs2.png',
                    width:nowSize(150), 
                    height:nowSize2(150),
                    x:nowSize(15),
                    y:nowSize2(115),
                }
            },
            series:[{
                name:'验布检验数量和等级之间的比例图',
                type:'pie',
                radius:['40%','75%'],
                left:'39%',
                bottom:'13%',
                label:{
                    show:false,
                    color:'#fff',
                    fontSize:15,
                    position:'center',
                },
                emphasis:{
                    label:{
                        show:true,
                        fontSize:23,
                        fontWeight:'bold',
                    }
                },
                data:data.value,

            }]
        })
        mychart2.setOption({
            title:{
                text:'订单量按期交货率',
                left:'center',       
                textStyle:{
                    color:'#fff',
                    fontSize:nowSize(15),
                }        
            },
            grid:{

            },
            series: [
                {
                type: 'gauge',
                radius: '100%',
                center: ['50%', '70%'],
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 100,
                splitNumber: 5,
                itemStyle: {
                    color: '#58D9F9',
                    shadowColor: 'rgba(0,138,255,0.45)',
                    shadowBlur: 5,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                },
                //进度条
                progress: {
                    show: true,
                    roundCap: true,
                    width: nowSize(7)
                },
                //刻度线标签
                axisLabel: {
                    distance: nowSize(10),
                    color: 'white',
                    fontSize: nowSize(8),
                    
                },
                //轴线
                axisLine: {
                    roundCap: true,
                    position: 'center',
                    lineStyle: {
                    width: nowSize(7),
                    // color: 'white',
                    }
                },

                detail: {
                    // backgroundColor: '',
                    borderColor: '#999',
                    borderWidth: 1,
                    width: '20%',
                    lineHeight: nowSize(10),
                    height: nowSize(6),
                    borderRadius: 4,
                    offsetCenter: [0, '35%'],
                    valueAnimation: true,
                    formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}{unit|%}';
                    },
                    rich: {
                    value: {
                        fontSize: nowSize(10),
                        fontWeight: 'bolder',
                        color: 'white'
                    },
                    unit: {
                        fontSize: nowSize(10),
                        color: 'white'
                    }

                    }
                },
                data: [
                    {
                    value: datapro[0],
                    }
                ]
                }
            ]
        })
        mychart3.setOption({
            title:{
                text:'当前订单完成率',
                left:'center',       
                textStyle:{
                    color:'#fff',
                    fontSize:nowSize(15),
                }        
            },
            grid:{

            },
            series: [
                {
                type: 'gauge',
                radius: '100%',
                center: ['50%', '70%'],
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 100,
                splitNumber: 5,
                itemStyle: {
                    color: '#58D9F9',
                    shadowColor: 'rgba(0,138,255,0.45)',
                    shadowBlur: 5,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                },
                //进度条
                progress: {
                    show: true,
                    roundCap: true,
                    width: nowSize(7)
                },
                //刻度线
                axisLabel: {
                    distance: nowSize(10),
                    color: 'white',
                    fontSize: nowSize(8),
                    
                },
                //轴线
                axisLine: {
                    roundCap: true,
                    position: 'center',
                    lineStyle: {
                    width: nowSize(7),
                    }
                },

                detail: {
                    // backgroundColor: '',
                    borderColor: '#999',
                    borderWidth: 1,
                    width: '20%',
                    lineHeight: nowSize(10),
                    height: nowSize(6),
                    borderRadius: 4,
                    offsetCenter: [0, '35%'],
                    valueAnimation: true,
                    formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}{unit|%}';
                    },
                    rich: {
                    value: {
                        fontSize: nowSize(10),
                        fontWeight: 'bolder',
                        color: 'white'
                    },
                    unit: {
                        fontSize: nowSize(10),
                        color: 'white'
                    }

                    }
                },
                data: [
                    {
                    value: datapro[1],
                    }
                ]
                }
            ]
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
     .col4{
        width: 100%;
        height: 27vh;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .title {
        padding-left: 2.1vw;
        height: 3vh;
        width: 30.5vw;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
        color: rgb(255, 255, 255);
        line-height: 3vh;
        font-family: 'Microsoft YaHei';
    }
    .chart1{
        float: left;
        width: 70%;
        height: 100%;
    }
    .chart2{
        float: left;
        width: 29%;
        height: 44%;

    }
</style>