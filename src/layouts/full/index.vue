<script setup lang="ts">


import Sidebar from "@/layouts/full/Sidebar.vue";
import Content from "@/layouts/full/Content.vue";
import Header from "@/layouts/full/Header.vue";
import Footer from "@/layouts/full/Footer.vue";
</script>

<template>
  <n-layout position="absolute" has-sider>
    <sidebar/>
    <n-layout>
        <Header />
      <Content/>
      <Footer />
    </n-layout>
  </n-layout>
</template>
<style scoped>

</style>