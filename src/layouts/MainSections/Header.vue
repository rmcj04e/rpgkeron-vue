<template>
  <div class="header-block">

    <div class="video-background">
      <video preload="auto" autoplay="true" loop="true" muted="muted">
        <source src="@/assets/media/video/background.mp4">
        <source src="@/assets/media/video/background.webm" type="video/webm">
      </video>
    </div>

    <div class="ui-header">
      <div class="ui-inner">
        <nav class="header">

          <div class="logotype">

            <router-link to="/">
              <img src="@/assets/media/images/logotype.png" alt="Logotype">
            </router-link>

          </div>

          <div class="navigation">

            <router-link to="/" class="navigation-element">

              <div class="icon"><i class="ui-icon ui-icon-home"></i><i class="ui-icon ui-icon-home-hover hover-icon"></i>
              </div>

              <div class="name">Главная</div>

            </router-link>

            <router-link class="navigation-element gold" to="/donate">
              <div class="icon"><i class="ui-icon ui-icon-donate"></i><i class="ui-icon ui-icon-donate-hover hover-icon"></i>
              </div>
              <div class="name">Донат</div>
            </router-link>

            <router-link class="navigation-element" to="/rules">
              <div class="icon"><i class="ui-icon ui-icon-info"></i><i class="ui-icon ui-icon-info-hover hover-icon"></i>
              </div>
              <div class="name">Правила</div>
            </router-link>

            <router-link v-if="!userData.isAuth" class="header-button" to="/register">
              <div class="inner-button"><i class="ui-icon ui-icon-add"></i>
                <div class="name">Регистрация аккаунта</div>
              </div>
            </router-link>

            <router-link v-if="userData.isAuth" class="header-button" to="/start">
              <div class="inner-button"><i class="ui-icon ui-icon-add"></i>
                <div class="name">Скачать лаунчер</div>
              </div>
            </router-link>

          </div>
          <button class="burger" id="active-sidebar"><i class="ui-icon ui-icon-burger"></i>
          </button>
        </nav>
      </div>
    </div>

  </div>
</template>

<script>
 export default {
   name : "Header",
   props : {
     userData : Object
   }
 }
</script>