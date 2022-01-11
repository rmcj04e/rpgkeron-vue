<template>
<div>

  <div class="ui-block-basic auth animate__animated animate__fadeIn">
    <div class="ui-block-title">
      <div class="login">Привет, <span> {{ userData.userName }}</span></div>

      <button v-on:click="logout"><i class="ui-icon ui-icon-exit"></i>
      </button>

    </div>
    <div class="ui-block-content column-content-direction">
      <div class="ui-login-header">
        <div class="ui-login-avatar"><img :alt="userData.userName" src="@/assets/media/images/steve.png"/></div>
        <div class="ui-login-money">
          <div class="balance">
            <div class="title">Ваш баланс:</div>
            <div class="currency"><b>410</b> монет</div>
          </div><a class="add" href="#"><i class="ui-icon ui-icon-plus"></i></a>
        </div>
      </div>
      <div class="ui-login-navigation">

        <div class="navigation-element">
          <router-link to="/usercp">
            <div class="icons"><i class="ui-icon ui-icon-login-user"></i><i class="ui-icon ui-icon-login-user-active"></i>
            </div>
            <div class="title">Личный кабинет</div>
          </router-link>
        </div>

      </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: "MiniProfile",
  props: {
    userData : Object
  },
  methods:{
    logout(){
      let self = this;

      self.$store.commit('logout')
      self.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>