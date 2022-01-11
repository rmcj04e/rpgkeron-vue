<template>
  <div class="server">
    <div class="progress">
      <svg width="66" height="66">
        <circle class="progress-background" r="15" cx="33" cy="33" fill="#191616" stroke="#cec0b5" stroke-width="9"></circle>
        <circle class="progress-bar" r="15" cx="33" cy="33" fill="transparent" stroke-width="10"></circle>
      </svg>
    </div>
    <div class="info">
      <div class="server-name">{{ title }}</div>
      <div class="server-data">Онлайн:
        <div class="server-online">{{ totalOnline }} из {{ maxSlots }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "Server",
  props : {
    totalOnline : Number,
    maxSlots : Number,
    title : String
  }
}
</script>