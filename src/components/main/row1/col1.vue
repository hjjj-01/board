<template>
    <div class="row1-col1" >
        <div class="header">机台效率区间</div>
        <div ref="chart" class="echarts">

        </div>
    </div>
</template>
<script setup>
    import * as echarts from 'echarts'
    import { onMounted,ref,onUnmounted } from "vue";
    import {getrandom1} from '@/assets/src/JS/random'
        //当前视口宽度
    let nowClientWidth = document.documentElement.clientWidth;
    let nowClientHeight = document.documentElement.clientHeight;
    function nowSizeW(val,initWidth=1920){
        return val * (nowClientWidth/initWidth);
    }
    function nowSizeH(val,initHeight=1080){
        return val * (nowClientHeight/initHeight);
    }

    const chart = ref(null)
    const A =ref([])
    const B =ref('')
    const data = ref([
            {name:'95%-100%',value:'',itemStyle:{color:'#0099ff'}},
            {name:'90%-95%',value:''},
            {name:'85%-90%',value:11},
            {name:'80%-85%',value:7},
            {name:'75%-80%',value:3},
            {name:'70%以下',value:2}
    ])

   
    onMounted(() => {
        A.value = getrandom1(1,126,129)
        B.value = 160-A.value[0]
        data.value[1].value = A.value[0]
        data.value[0].value = B.value
        const mychart = echarts.init(chart.value)
        mychart.setOption({

            tooltip:{
                trigger:'item'
            },

            legend:{
                orient:'vertical',
                top:'12%',
                right:'60%',
                textStyle:{
                    color:'#fff',
                    fontSize:nowSizeW(12)
                },               
                    itemHeight:nowSizeW(16),
                    itemWidth:nowSizeW(26)
     
            },
            graphic:{
                type:'image',
                style:{
                    image:'/zs1.png',
                    width:nowSizeW(180),
                    height:nowSizeH(60),
                    x:nowSizeW(118),
                    y:nowSizeH(190),
                }
            },

            series:[{
                type:'pie',
                radius: ['40%', '75%'],
                label:{
                    show:false,
                    position:'center'
                },
                left:'35%',
                bottom:'15%',

                emphasis:{
                    label:{
                        show:true,
                        fontSize:'15',
                        color:'#fff'
                    },
                },
                data:data.value
            }]
        })
        let Index = 0;
        const interval = setInterval(() => {
                mychart.dispatchAction({
                    type:'showTip',
                    seriesIndex:0,
                    dataIndex:Index,
                });
                mychart.dispatchAction({
                    type:'highlight',
                    seriesIndex:0,
                    dataIndex:Index,
                });
                mychart.dispatchAction({
                    type:'downplay',
                    seriesIndex:0,
                    dataIndex:(Index-1+6)%6,
                });
                Index = (Index+1)%6;
            },1500);
            onUnmounted(()=>{
                clearInterval(interval)
            })
    });


</script>
<style scoped>
    .row1-col1 {
        width: 99.5%;
        height: 100%;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .echarts {
        height: 88%;
        width: 100%;
        font-size: 25px;
        /* background-color: rgb(160, 216, 233); */
    }
    .header {
        padding-left: 1vw;
        height: 3vh;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%; 
        color: aliceblue;
        line-height: 3vh;
        font-family: 'Microsoft YaHei';
    }
</style>