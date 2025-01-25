<template>
    <div class="row3-col3">
        <div class="title">了机预测时间</div>
        <el-table  align="center" :data="displayedData" id="custom-table" class="table">
            <el-table-column prop="id" label="#" :width=a align="center"/>
            <el-table-column prop="machineNo" label="机台号" :width=b align="center"/> 
            <el-table-column prop="inQty" label="预计了机时间/时" :width=c align="center" /> 
        </el-table>
    </div>
</template>
<script setup>
    import { ref,onMounted,onUnmounted } from 'vue'
    import { getrandom3,getrandom2 } from '@/assets/src/JS/random'
    //当前视口宽度
    let nowClientWidth = (document.documentElement.clientWidth);
    function nowSize(val,initWidth=1920){
        return val * (nowClientWidth/initWidth);
    }
    const a = ref(nowSize(65))
    const b = ref(nowSize(90))
    const c = ref(nowSize(160))

    const tableData = ref([])
    tableData.value=Array.from({length:50},(_,index)=>({
        id:index+1,
        machineNo:getrandom3(1,1,214),
        inQty:getrandom2(1,1,1000)
    }))

    let Index = 0;
    const visiblerows = 5;
    const displayedData=ref([])
    const updatadis=()=>{
        displayedData.value=tableData.value.slice(Index,Index+visiblerows)
        Index = (Index+visiblerows)%tableData.value.length
    } 

    onMounted( ()=>{
        updatadis()
        const timer = setInterval(() => updatadis(), 2000);
        onUnmounted(() => clearInterval(timer))
    })
</script>
<style scoped>
     .row3-col3 {
        width: 100%;
        height: 100%;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .title {
        padding-left: 1.2vw;
        height: 3vh;
        width: 15.6vw;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
        color: #ffffff;
        line-height: 3vh;
        font-size:0.9vw;
        font-family: 'Microsoft YaHei';
    }
    .chart{
        width: 100%;
        height: 89%;
    }


</style>