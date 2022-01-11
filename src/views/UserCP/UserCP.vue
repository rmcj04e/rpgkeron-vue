<template>
  <div>
    <div class="ui-block-basic cabinet-block-main">
      <div class="ui-block-content cabinet">
        <div class="cabinet-main-header">
          <div class="user-title">
            <div class="user-icon"><i class="ui-icon ui-icon-user-button"></i>
            </div>
            <div class="user-description">
              <div class="title">Личный кабинет</div>
              <div class="username">{{ user.userName }}</div>
            </div>
          </div>
          <div class="user-balance">
            <div class="balance-block">
              <div class="currency">410</div>
              <div class="title">Монеты</div>
            </div>
            <div class="balance-block">
              <div class="currency">1200</div>
              <div class="title">Эконы</div>
            </div>
            <div class="balance-block">
              <div class="currency">13</div>
              <div class="title">Голосов</div>
            </div>
          </div>
        </div>
        <div class="cabinet-main-content">
          <div class="user-skin"><img alt="Основной скин reygasai" src="@/assets/media/images/skin_front.png"></div>
          <div class="user-info">
            <div class="info-row">
              <div class="title">Дата регистрации</div>
              <div class="description">31.08.2020 в 18:31 по МСК</div>
            </div>
            <div class="info-row">
              <div class="title">С момента регистрации прошло</div>
              <div class="description">0 дней</div>
            </div>
            <div class="info-row">
              <div class="title">Количество привилегий на серверах</div>
              <div class="description">0 штук</div>
            </div>
            <div class="info-row">
              <div class="title">Двухфакторная аутентификация</div>
              <div class="description red">Отключена</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "UserCP",
  computed: {
    user(){
      return this.$store.state.user
    }
  }
}
</script>