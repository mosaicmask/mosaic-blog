<!--
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-04-02 17:23:35
-->
<template>
  <nav class="navbar navbar-expand-lg navbar-mainbg">
    <a class="navbar-brand navbar-logo" href="https://github.com/mosaicmask"><i class="bi bi-github"></i>mosiac</a>
    <button
      class="navbar-toggler menu-toggle menu-toggle"
      :class="btnFlg == 1 ? 'clicked' : ''"
      @click="changeBtnFlg"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <div class="hori-selector">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <li class="nav-item" ref="home">
          <router-link to="/"> <i class="bi bi-house"></i>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/photography"><i class="bi bi-camera"></i>Photography</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/myNotes"><i class="bi bi-pencil"></i>My notes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/myDemo"><i class="bi bi-battery-charging"></i>My demo</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/aboutMe"><i class="bi bi-emoji-sunglasses"></i>About me</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import '../../hooks/js/navbar.js'
// 常用的Composition API:defineComponent,ref,reactive,toRef,toRefs
// defineComponent 函数目的是定义一个组件 内部可以传入一个配置对象
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'navbar',
  setup() {
    const btnFlg = ref(0)
    function changeBtnFlg() {
      if (btnFlg.value === 1) {
        btnFlg.value = 0
      } else {
        btnFlg.value = 1
      }
    }
    return { btnFlg, changeBtnFlg }
  },
})
</script>

<style scoped src="./css/out/navbar.css"></style>
