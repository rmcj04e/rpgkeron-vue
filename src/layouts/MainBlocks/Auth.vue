<template>
<div>
  <div class="ui-block-basic auth animate__animated animate__fadeIn">
    <div class="ui-block-title">Авторизация</div>
    <div class="ui-block-content column-content-direction">

      <form class="ui-form" v-on:submit.prevent="goAuth">
        <div class="ui-form-group">
          <label class="name-input" for="name">Логин</label>
          <input v-model="nick" type="text" name="login" id="name" placeholder="reygasai"/>
        </div>
        <div class="ui-form-group">
          <label class="name-input" for="password">Пароль</label>
          <input v-model="password" type="password" name="password" id="password" placeholder="*************"/>
        </div>
        <div class="footer-auth-form">
          <div class="links"><router-link to="/recovery">Забыли пароль?</router-link> <router-link to="/register">Создать аккаунт</router-link></div>
          <button class="ui-button-big icon-right" type="submit"><i class="ui-icon ui-icon-user-button"></i>
            <div class="name">Войти в аккаунт</div>
          </button>
        </div>
      </form>


    </div>
  </div>
</div>
</template>

<script>
export default {
  name : "Auth",
  data(){
    return {
      nick : "",
      password: ""
    }
  },
  methods : {
   goAuth(){
     var self = this

     if(!self.nick || !self.password) {
       alert('Введи логин/пасс дурило...')
       throw new Error('Login or pass is empty')
     }
     let storeData = { jwt : self.password, group : "users" , username : self.nick }

     self.$store.commit('setUser', storeData)
     self.$router.push('/')

   }
  }
}
</script>