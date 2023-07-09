<template>
    <el-result icon="warning" title="404" sub-title="非常抱歉，您要访问的页面不见了~">
        <template #extra>
            <el-button type="primary" @Click="_$event => $router.push('/home')">返回首页</el-button>
        </template>
    </el-result>
</template>
    
<script setup lang="ts">

</script>
    
<style scoped lang="scss"></style>
    