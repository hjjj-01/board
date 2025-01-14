<template>
    <div class="col2">
        <div class="title">机台效率排行</div>
        <div class="scroll-container">
            <el-table :data="displayedData"  height="23vh" class="scroll-table" id="custom-table">
                <el-table-column prop="id" label="排名" :width=a align="center" />
                <el-table-column prop="name" label="机台号" :width=b align="center" />
                <el-table-column prop="effice" label="效率(%)" :width=c align="center" :formatter="(row)=>`${row.effice}%`"/>
            </el-table>
        </div>
    </div>
</template>

<script setup>
    import {getrandom2,getrandom1} from '@/assets/src/JS/random'
    import { ref, onMounted, onUnmounted } from 'vue';
    //当前视口宽度
    let nowClientWidth = (document.documentElement.clientWidth);
    function nowSize(val,initWidth=1920){
        return val * (nowClientWidth/initWidth);
    }
    const a = ref(nowSize(70));
    const b = ref(nowSize(83));
    const c = ref(nowSize(90));

    const tableData = ref([]);
    // 滚动函数
    const displayedData = ref([]);
    let Index = 0;
    const visiblerows = 5; // 可见行数
    const updateDisplayedData = () => {
        displayedData.value = tableData.value.slice(Index, Index + visiblerows);
        Index = (Index + 5) % tableData.value.length; 
    };

    onMounted(() => {
        // 生成随机数据
        tableData.value=Array.from({length:15}).map(()=>({
            name:String(getrandom1(1,1,60)).padStart(3,'0'),
            effice:getrandom2(1,96,97)
        }))



        // 按效率排序
        tableData.value.sort((a, b) => b.effice - a.effice);
         // 排名从 1 开始
        tableData.value.forEach((item, index) => {
            item.id = index + 1;
        });

        //滚动
        updateDisplayedData(); 
        const interval = setInterval(updateDisplayedData, 1800);



        onUnmounted(() => {
            clearInterval(interval); 
        });


    });

</script>

<style scoped>
    .col2 {
        width: 100.5%;
        height: 100%;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
    }

    .title {
        padding-left: 1vw;
        height: 3vh;
        width: 11.3vw;
        background-image: url(/src/assets/src/stip1.png);
        background-repeat: no-repeat;
        background-position: center; 
        background-size: 100% 100%;
        color: aliceblue;
        line-height: 3vh;
        font-family: 'Microsoft YaHei';
    }



    .scroll-container {
        height: 23vh; 
        padding: 0px 3px 0px 3px;
        margin: -2px 1px 1px 1px;
    }


</style>
