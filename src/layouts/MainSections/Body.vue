<template>
  <div class="content-block">

    <div class="ui-inner content-inner">

      <div class="ui-container">

        <div class="ui-block-main animate__animated animate__fadeInLeft">

          <router-view class="animate__animated animate__fadeIn"></router-view>

        </div>
        <Sidebar />


      </div>
    </div>

  </div>
</template>

<script>
import Sidebar from "@/layouts/MainSections/Sidebar";
export default {
  name : "Body",
  components : {Sidebar}
}
</script>