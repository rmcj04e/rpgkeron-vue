<template>
  <div class="ui-block-sidebar">

    <div class="ui-block-sidebar-fixed">
      <button class="ui-block-sidebar-fixed-close" id="close-sidebar"><i class="ui-icon ui-icon-close"></i><span>Закрыть меню</span>
      </button>
      <div class="ui-block-sidebar-fixed-navigation"></div>

      <Auth v-if="!user.isAuth" />

      <MiniProfile v-if="user.isAuth" :userData="user" />

      <Monitoring />

      <div class="ui-block-basic social">
        <div class="ui-block-title">Мы Вконтакте</div>
        <div class="ui-block-content"></div>
      </div>

    </div>

  </div>
</template>

<script>
import Auth from "@/layouts/MainBlocks/Auth";
import MiniProfile from "@/layouts/MainBlocks/MiniProfile";
import Monitoring from "@/layouts/MainBlocks/Monitoring";
export default {
  name : "Sidebar",
  components : {
    Auth,
    MiniProfile,
    Monitoring
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  }
}
</script>