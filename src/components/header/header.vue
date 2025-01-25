<template>
    <div class="header">
        <el-row :span="24">
            <el-col :span="2">
                <div>机台总数</div>
                <div :style="{fontSize:'3vh',color:'red'}">220</div>
            </el-col>
            <el-col :span="2">
                <div>正常机台</div>
                <div :style="{fontSize:'3vh',color:'red'}">219</div>
            </el-col>
            <el-col :span="2">
                <div>离线机台</div>
                <div :style="{fontSize:'3vh',color:'red'}">1</div>
            </el-col>
            <el-col :span="2">
                <div>当班效率</div>
                <div :style="{fontSize:'3vh',color:'red'}">{{nowdataeffice}}%</div>
            </el-col>
            <el-col :span="2">
                <div>当日效率</div>
                <div :style="{fontSize:'3vh',color:'red'}">{{nowdataeffice}}%</div>
            </el-col>
            <el-col :span="2">
                <div>当月效率</div>
                <div :style="{fontSize:'3vh',color:'red'}"> {{data[1]}}%</div>
            </el-col>
            <el-col :span="2">
                <div>日开机率</div>
                <div :style="{fontSize:'3vh',color:'red'}"> {{data[3]}}%</div>
            </el-col>
            <el-col :span="2">
                <div>月开机率</div>
                <div :style="{fontSize:'3vh',color:'red'}">{{data[2]}}%</div>
            </el-col>
            <el-col :span="2">
                <div>在织订单</div>
                <div :style="{fontSize:'3vh',color:'red'}">28</div>
            </el-col>
            <el-col :span="2">
                <div>待排订单</div>
                <div :style="{fontSize:'3vh',color:'red'}">3</div>
            </el-col>
            <el-col :span="2">
                <div>织造产量(吨)</div>
                <div :style="{fontSize:'3vh',color:'red'}">14</div>
            </el-col>
            <el-col :span="2">
                <div>整经产量(吨)</div>
                <div :style="{fontSize:'2.6vh',color:'red'}">31</div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
    import { ref,onMounted,computed } from 'vue'
    import {getrandom1} from '@/assets/src/JS/random'
    import { useStore } from 'vuex';
    const store = useStore();
    const nowdataeffice = computed(() => store.state.noweffice);

    const data=ref([])
    onMounted(()=>{
        data.value=getrandom1(4,88,93)
    })


</script>
<style scoped>
    .header {
        width: 98vw;
        height: 7.2vh;
        margin-left: 1vw;
        /* background-color: aqua; */
        
    }
    .el-col{
        height: 7vh;
        padding-top: 0.2vh;
        background-image: url(/src/assets/src/border3.png);
        background-size: 8.3vw 7vh;
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
        line-height: 3.2vh;
        color: rgb(255, 254, 254);
        font-size: 1.8vh;
    }
</style>