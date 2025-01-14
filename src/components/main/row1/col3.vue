<template>
    <div class="row1-col3">
        <div  class="title">
            <div class="tip">设备</div>
            <div v-for="item in statusdata" class="divs">
                <div class="div1" :style="{backgroundColor:item.color}"></div>
                <div class="div2">{{item.text}}</div>
            </div>

        </div>
            <div class="content-box">
                <div>
                    <div class="workshop">港丰经编一车间</div>
                    <div v-for="item in machinedata1" class="content" :class="{'color-green':item.status==='运行','color-red':item.status==='停机'}">
                    <p>机台：{{item.ID}}</p>
                    <p>状态：{{item.status}}</p>
                    <p>占比：{{item.proportion[0]}}%</p>
                    </div>
                </div>
                <div>
                    <div class="workshop">港丰经编二车间</div>
                    <div v-for="item in machinedata2" class="content" :class="{'color-green':item.status==='运行','color-red':item.status==='停机','color-lightblue':item.status==='调试'}">
                    <p>机台：{{item.ID}}</p>
                    <p>状态：{{item.status}}</p>
                    <p>占比：{{item.proportion[0]}}%</p>
                    </div>
                </div>
                <div>
                    <div class="workshop">港丰经编三车间(贾卡)</div>
                    <div v-for="item in machinedata4" class="content" :class="{'color-green':item.status==='运行','color-red':item.status==='停机'}">
                    <p>机台：{{item.ID}}</p>
                    <p>状态：{{item.status}}</p>
                    <p>占比：{{item.proportion[0]}}%</p>
                    </div>
                </div>
                <div>
                    <div class="workshop">港丰经编三车间(三层网)</div>
                    <div v-for="item in machinedata5" class="content" :class="{'color-green':item.status==='运行','color-red':item.status==='停机'}">
                    <p>机台：{{item.ID}}</p>
                    <p>状态：{{item.status}}</p>
                    <p>占比：{{item.proportion[0]}}%</p>
                    </div>
                </div>
                <div>
                    <div class="workshop">港丰纬编一车间</div>
                    <div v-for="item in machinedata3" class="content" :class="{'color-green':item.status==='运行','color-red':item.status==='停机','color-blown':item.status==='上轴','color-blue':item.status==='穿纱','color-pink':item.status==='上轴(改机)'}">
                    <p>机台：A{{item.ID}}</p>
                    <p>状态：{{item.status}}</p>
                    <p>占比：{{item.proportion[0]}}%</p>
                    </div>
                </div>
                <div>
                    <div class="workshop">港丰整经一车间</div>
                    <div v-for="item in machinedata6" class="content" :class="{'color-green':item.status==='运行','color-red':item.status==='停机'}">
                    <p>机台：C{{item.ID}}</p>
                    <p>状态：{{item.status}}</p>
                    <p>占比：{{item.proportion[0]}}%</p>
                    </div>
                </div>
                <div>
                    <div class="workshop">港丰整经二车间</div>
                    <div v-for="item in machinedata7" class="content" :class="{'color-green':item.status==='运行','color-red':item.status==='停机'}">
                    <p>机台：D{{item.ID}}</p>
                    <p>状态：{{item.status}}</p>
                    <p>占比：{{item.proportion[0]}}%</p>
                    </div>
                </div>
               

            </div>
    </div>
</template>
<script setup>
    import {getrandom1,getrandom3,getrandom4} from '@/assets/src/JS/random'
    import { ref,onMounted, onUnmounted } from 'vue'
    let nowClientWidth = (document.documentElement.clientWidth);
    function nowSize(val,initWidth=1920){
        return val * (nowClientWidth/initWidth);
    }


    const statusdata=ref([
        {ID:1,text:'运行 192台  (87%)',color:'#049128'},
        {ID:2,text:'停机 23台 (10%)',color:'#FF0000'},
        {ID:3,text:'上轴 1台 (1%)',color:'#800000'},
        {ID:4,text:'穿纱 1台 (1%)',color:'#000080'},
        {ID:5,text:'调试 1台 (1%)',color:'#008080'},
        {ID:6,text:'保养 0台 (0%)',color:'#00FFFF'},
        {ID:7,text:'待确认 0台 (0%)',color:'#808080'},
        {ID:8,text:'上轴(改机) 2台 (1%)',color:'#FF00FF'},
        {ID:9,text:'穿纱(改机) 0台 (0%)',color:'#808000'},
        {ID:10,text:'调试(改机) 0台 (0%)',color:'#000080'},
        {ID:11,text:'待确任(改机) 0台 ',color:'#BDB76B'},
        {ID:12,text:'换针 0台 (0%)',color:'#D2691E'},
        {ID:13,text:'待盘头 0台 (0%)',color:'#F4A460'},
    ])
    onMounted(() => {

            machinedata1.value=Array.from({length: 32}).map((_,index)=>({
                status:'运行',
                proportion:getrandom1(1,80,95),
                ID:String(index+1).padStart(3,'0')
            })),
            machinedata2.value=Array.from({length: 40}).map((_,index)=>({
                status:'运行',
                proportion:getrandom1(1,80,95),
                ID:String(index+33).padStart(3,'0')
            }))
            machinedata3.value=Array.from({length: 75}).map((_,index)=>({
                status:'运行',
                proportion:getrandom1(1,80,95),
                ID:String(index+1).padStart(2,'0')
            }))
            machinedata4.value=Array.from({length: 21}).map((_,index)=>({
                status:'运行',
                proportion:getrandom1(1,80,95),
                ID:String(index+700).padStart(2,'0')
            }))
            machinedata5.value=Array.from({length: 17}).map((_,index)=>({
                status:'运行',
                proportion:getrandom1(1,80,95),
                ID:String(index+73).padStart(3,'0')
            }))
            machinedata6.value=Array.from({length: 15}).map((_,index)=>({
                status:'运行',
                proportion:getrandom1(1,80,95),
                ID:String(index+1).padStart(2,'0')
            }))
            machinedata7.value=Array.from({length: 10}).map((_,index)=>({
                status:'运行',
                proportion:getrandom1(1,80,95),
                ID:String(index+7).padStart(2,'0')
            }))
            //颜色显示s
            const ms=ref([])
            const changestatus1=()=>{
                ms.value=getrandom3(3,1,32)
                ms.value.forEach(item1 => {
                    const machine = machinedata1.value.find(item2 => item2.ID === item1); 
                    if (machine) {
                        machine.status = '停机'; 
                    }
                });
            }
            const changestatus2=()=>{
                ms.value=getrandom3(4,33,76)
                ms.value.forEach(item1 => {
                    const machine = machinedata2.value.find(item2 => item2.ID === item1); 
                    if (machine) {
                        machine.status = '停机'; 
                    }
                });
                machinedata2.value[3].status='调试'

            }
            const changestatus4=()=>{
                ms.value=getrandom3(3,700,720)
                ms.value.forEach(item1 => {
                    const machine = machinedata4.value.find(item2 => item2.ID === item1); 
                    if (machine) {
                        machine.status = '停机'; 
                    }
                });
            }
            const changestatus3=()=>{
                ms.value=getrandom4(7,1,75)
                ms.value.forEach(item1 => {
                    const machine = machinedata3.value.find(item2 => item2.ID === item1); 
                    if (machine) {
                        machine.status = '停机'; 
                    }
                });
                machinedata3.value[15].status='上轴'
                machinedata3.value[27].status='穿纱'
                machinedata3.value[60].status='上轴(改机)'
                machinedata3.value[61].status='上轴(改机)'
            }
            const changestatus5=()=>{
                ms.value=getrandom3(3,75,89)
                ms.value.forEach(item1 => {
                    const machine = machinedata5.value.find(item2 => item2.ID === item1); 
                    if (machine) {
                        machine.status = '停机'; 
                    }
                });
            }
            const changestatus6=()=>{
                ms.value=getrandom4(3,1,15)
                ms.value.forEach(item1 => {
                    const machine = machinedata6.value.find(item2 => item2.ID === item1); 
                    if (machine) {
                        machine.status = '停机'; 
                    }
                });
            }
            changestatus1()
            changestatus2()
            changestatus4()
            changestatus3()
            changestatus6()
            changestatus5()
            const interval=setInterval(()=>{

                machinedata1.value.forEach(item => {
                    item.status = '运行';
                });
                machinedata2.value.forEach(item => {
                    item.status = '运行';
                });
                machinedata3.value.forEach(item => {
                    item.status = '运行';
                });
                machinedata4.value.forEach(item => {
                    item.status = '运行';
                });
                machinedata5.value.forEach(item => {
                    item.status = '运行';
                });
                machinedata6.value.forEach(item => {
                    item.status = '运行';
                });
                machinedata7.value.forEach(item => {
                    item.status = '运行';
                });
                
                changestatus1()
                changestatus2()
                changestatus4()
                changestatus3()
                changestatus5()
                changestatus6()
            },3600000)

            onUnmounted(()=>{
                clearInterval(interval)
                clearInterval(scrollInterval)
                clearInterval(scrollInterval2)
            })

            const contentBox = document.querySelector('.content-box');
    
            const scrollInterval = setInterval(() => {
                contentBox.scrollTop += 1;

                // 如果已滚动到底部，则重置
                if (contentBox.scrollTop >= contentBox.scrollHeight - contentBox.clientHeight) {
                    contentBox.scrollTop = 0; 
                }
            }, 50);
            const scrollInterval2 = setInterval(() => {
                contentBox.scrollTop=0
            },52000)



    })
    
    
    const machinedata1=ref([])//经编一车间机台
    const machinedata2=ref([])//经编二车间机台
    const machinedata3=ref([])//纬编一车间机台
    const machinedata4=ref([])//经编三车间机台(贾卡)
    const machinedata5=ref([])//经编三车间机台(三层网)
    const machinedata6=ref([])//整经一车间
    const machinedata7=ref([])//整经二车间
</script>
<style scoped>
     .row1-col3{
        width: 69.5vw;
        height: 27vh;
        background-image: url(/src/assets/src/tip3.png);
        background-repeat: no-repeat;
        background-position: flex;
        background-size: 100% 100%;
        
    }
    .title{
        height: 4.5vh;
        padding-left: 0.7vw;
        color: #ffffff;
        background-image: url(/src/assets/src/stip4.png);
        background-repeat: no-repeat;
        background-position: -13vw center;
        background-size: 85vw 120%;
        line-height: 4.5vh;
        font-size: 2vh;
    }
    .content-box{
        width: 69.5vw;
        height: 21vh;
        overflow: auto;
        scrollbar-width: none;

    }
    .content{
        display: inline-block;
        width: 3vw;
        height: 6.1vh;
        margin: 0.525vh;
        line-height: 0.9vh;
        text-align: center;
        border-radius: 10%;
        font-size: 1vh;
        color: #ffffff;
    }
    .workshop{
        float: left;
        /* background-color: aqua; */
        height: 2.5vh;
        width: 100%;
        font-size: 17px;
        text-align: center;
        color: #ffffff;
    }
    .tip{
        float: left;
        height:3vh;
        width: 3vw;
        line-height: 2.1vw;
    }
    .divs{
        float: left;
        height: 3vh;
        width: 5vw;
        font-size: 0.9vh;
        margin-top: 0.6vh;
        /* background-color: #10a128; */
    }
    .div1{
        float: left;
        height: 80%;
        width: 0.8vw;
        margin-top: 0.22vh;
        /* background-color: #f10a0a; */
        border-radius: 40%;
    }
    .div2{
        width: 3.58vw;
        padding-left: 0.2vw;
        /* background-color: #6d4141; */
        line-height: 1.5vh;
        text-align: center;
    }
    .color-green{
        background-color: #049128;

    }
    .color-red{
        background-color: #FF0000;

    }
    .color-blown{
        background-color: #800000;

    }
    .color-blue{
        background-color: #000080;

    }
    .color-pink{
        background-color: #FF00FF;
        line-height: 0.6vh;
    }
    .content:nth-child(19n+2){
        background-color: #10a128;
        margin-left: 1vw;
    }
    .color-lightblue{
        background-color: #008080;
    }
</style>