<template>
    <div>
        <el-row :span="24"  >
            <el-col :span="4">
                <Row1Col1/>
            </el-col>
            <el-col :span="3">
                <Row1Col2/>
            </el-col>
            <el-col :span="17">
                <Row1Col3/>
            </el-col>
        </el-row>
        <el-row :span="24" >
            <el-col :span="4">
                <Row2Col1/>
            </el-col>
            <el-col :span="7">
                <Row2Col2/>
            </el-col>
            <el-col :span="5">
                <Row2Col3/>
            </el-col>
            <el-col :span="8">
                <Row2Col4/>
            </el-col>
        </el-row>
        <el-row :span="24" >
            <el-col :span="7">
                <Row3Col1/>
            </el-col>
            <el-col :span="13">
                <Row3Col2/>
            </el-col>
            <el-col :span="4">
                <Row3Col3/>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
    import Row1Col1 from './row1/col1.vue'
    import Row1Col2 from './row1/col2.vue'
    import Row1Col3 from './row1/col3.vue'
    import Row2Col1 from './row2/col1.vue'
    import Row2Col2 from './row2/col2.vue'
    import Row2Col3 from './row2/col3.vue'
    import Row2Col4 from './row2/col4.vue'
    import Row3Col1 from './row3/col1.vue'
    import Row3Col2 from './row3/col2.vue'
    import Row3Col3 from './row3/col3.vue'
</script>
<style scoped>
    .el-row{
        width: 98vw;
        height: 27vh;
        margin-left: 1vw;
        
    }

    
    
    
</style>