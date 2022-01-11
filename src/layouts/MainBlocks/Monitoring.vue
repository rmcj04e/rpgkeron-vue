<template>
  <div class="ui-block-basic monitoring animate__animated animate__fadeIn">
    <div class="ui-block-title">Мониторинг серверов</div>
    <div class="ui-block-content column-content-direction">

      <Server
          v-for="server in servers"
          :key="server.id"
          :totalOnline="server.totalOnline"
          :maxSlots="server.maxSlots"
          :title="server.title"
      />

    </div>

  </div>
</template>

<script>
import Server from "@/layouts/MainComponents/Server";
export default {
  name: "Monitoring",
  components: {Server},
  data(){
    return {
      servers : [
        {totalOnline : 70, maxSlots : 100, title: "RPG"},
        {totalOnline : 10, maxSlots : 250, title: "TechnoMagic"}
      ]
    }
  },
}
</script>

<style scoped>

</style>