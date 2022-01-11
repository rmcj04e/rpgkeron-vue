<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
 export default {
   components: {
     MainLayout
   },
   watch:{
     $route:{
       immediate: true,
       handler(to,from) {
         console.log(from)
         let title = to.meta.title || ' Страница';
         document.title = 'RPGKeron | ' + title;
       }
     }
   }
 }
</script>

<style lang="scss">
</style>
