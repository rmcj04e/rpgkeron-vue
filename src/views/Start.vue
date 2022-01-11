<template>
<div>
  <div class="ui-block-basic ui-block-pageinfo">
    <div class="ui-block-content row-content-direction">
      <div class="icon-row">
        <div class="icon download-page"><i class="ui-icon ui-icon-download"></i>
        </div>
      </div>
      <div class="main-row">
        <h1 class="title">Скачать лаунчер</h1>
        <p class="description">Для входа на наши серверы требуется специальная программа - лаунчер. <br>Данная прогамма предназначена для загрузки и запуска Minecraft с модами, от вас требуется лишь нажать на кнопочку "Играть". Она не займет много места на вашем диске.</p>
      </div>
    </div>
  </div>
  <div class="ui-block-download ui-block">
    <h2 class="ui-title">Наш лаунчер</h2>
    <div class="download-section"><a class="download-card blue-card" href="/launcher.exe"><i class="ui-icon ui-icon-windows"></i>
      <div class="title">
        <div class="os">Для WINDOWS</div>
        <div class="hover-text">Скачать (1.2мб)</div>
      </div></a><a class="download-card red-card" href="/launcher.jar"><i class="ui-icon ui-icon-mac"></i>
      <div class="title">
        <div class="os">Для MacOS</div>
        <div class="hover-text">Скачать (1.2мб)</div>
      </div></a><a class="download-card green-card" href="/launcher.jar"><i class="ui-icon ui-icon-linux"></i>
      <div class="title">
        <div class="os">Для Linux</div>
        <div class="hover-text">Скачать (1.2мб)</div>
      </div></a></div>
  </div>
  <div class="ui-block-download-info ui-block">
    <h2 class="ui-title">Игра не запускается, что делать?</h2>
    <div class="ui-block-basic info">
      <div class="ui-block-content column-content-direction">
        <div class="info-download-block">
          <h3 class="title">1. Устаревшие или неподходящие драйверы видеокарты.</h3>
          <p class="description">Чтобы устранить проблему необходимо просто скачать драйверы для вашей видеокарты и установить их. Обновление драйверов через "Диспетчер устройств" не решит проблемы! После установки драйверов скачанных с сайта производителя видеокарты игра должна заработать. </p>
        </div>
        <div class="info-download-block">
          <h3 class="title">2. Недостаточно оперативной памяти для запуска игры.</h3>
          <p class="description">Такое бывает, если в вашей системе одновременно запущено много програм, например браузер с множеством вкладок. В таком случае необходимо завершить работу нагружающих систему программ и попробовать запустить игру.</p>
          <p class="description">Так же это может быть при малом количестве выделенной памяти в настройках лаунчера. Не рекомендуем выделять большие объемы памяти, рекомендуем выделять не более 2048 Мб памяти.</p>
          <p class="description">Так же это может произойти если у вас 32-х разрядная система. В этой системе для одной программы возможно выделить максимум 1536 Мб оперативной памяти, чего мало для Minecraft версии старше 1.6.4. Версии старшие версии Minecraft 1.7.10 или 1.12.2 куда больше 1536 Мб в работе с модами.</p>
          <p class="description">Единственным выходом для подобных систем является переустановка их на 64-х разрядные.</p>
        </div>
        <div class="info-download-block"><a class="ui-button-big icon-right" href="/help.html"><i class="ui-icon ui-icon-help"></i>
          <div class="name">Помощь по запуску</div></a></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Start"
}
</script>

<style scoped>

</style>