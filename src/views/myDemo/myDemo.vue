<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-26 15:58:15
-->
<template>
  <h1>
    this is myDemo page
  </h1>
</template>

<script lang="ts">
// 常用的Composition API:defineComponent,ref,reactive,toRef,toRefs
// defineComponent 函数目的是定义一个组件 内部可以传入一个配置对象
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'myDemo',
});
</script>

<style scoped>
</style>