<template>
    <div class="row3-col2">
        <div class="title">坯布生产进度跟踪</div>
        <el-table  align="center" :data="displayedData" height="23vh" id="custom-table">
            <el-table-column prop="id" label="#" :width=a align="center"/>
            <el-table-column prop="orderNo" label="订单编号" :width=b align="center"/>
            <el-table-column prop="name" label="坯布名称" :width=c align="center"/>
            <el-table-column prop="deliveryDate" label="交货日期" :width=d align="center"/>
            <el-table-column prop="unit" label="单位" align="center" :width=e width="100"/>
            <el-table-column prop="planQty" label="计划量" :width=f align="center"/>
            <el-table-column prop="planQty" label="已排量" :width=g align="center"/> 
            <el-table-column prop="machineNo" label="机台号" :width=h align="center"/> 
            <el-table-column prop="inQty" label="入库量" :width=i align="center" /> 
        </el-table>
    </div>
</template>
<script setup>
    import { ref,onMounted,onUnmounted } from 'vue'
    import { getrandom4,getrandom3,getrandom1 } from '@/assets/src/JS/random'
    let nowClientWidth = (document.documentElement.clientWidth);
    function nowSize(val,initWidth=1920){
        return val * (nowClientWidth/initWidth);
    }
    const a = ref(nowSize(80))
    const b = ref(nowSize(150))
    const c = ref(nowSize(150))
    const d = ref(nowSize(150))
    const e = ref(nowSize(80))
    const f = ref(nowSize(100))
    const g = ref(nowSize(100))
    const h = ref(nowSize(100))
    const i = ref(nowSize(100))


    const getrandomdate=()=>{
        const datearr=ref([])
        const today = new Date()
        for(let i=0 ; i<100 ; i++){
            const date = new Date()
            const randomdata = parseInt(getrandom1(1,5,12))
            date.setDate(today.getDate()+randomdata)
            datearr.value.push(`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`)
        }   
        return datearr
    }
    const tableData = ref([ ])
    //翻滚效果
    let Index=0
    const visiblerows=5
    const displayedData=ref([])
    const visiblerow=()=>{
        displayedData.value=tableData.value.slice(Index,Index+visiblerows)
        Index=(Index+visiblerows)%tableData.value.length     
    }

    onMounted(() => {
        const datearr=getrandomdate()
        tableData.value=Array.from({length:100},(_,index)=>{
            const planQty=getrandom1(1,100,15000)
            const inQty=getrandom1(1,planQty-50,planQty)
            return{
            id:index+1,
            orderNo:'2410270'+(getrandom4(1,1,80)),
            name:'02210'+(getrandom3(1,1,500)),
            deliveryDate:datearr.value[index],
            unit:'Kg',
            planQty:planQty,
            machineNo:getrandom3(1,1,100),
            inQty:inQty,
            }
        })
        visiblerow()
        const timer=setInterval(() => visiblerow(), 2000)
        
        onUnmounted(()=>{
            clearInterval(timer)
        })
    })

    

</script>
<style scoped>
     .row3-col2 {
        width: 100%;
        height: 100%;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
    }
    .title {
        padding-left: 2vw;
        height: 3vh;
        width: 30vw;
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