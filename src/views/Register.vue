<template>
  <div>
    <div class="ui-block-basic ui-block-pageinfo">
      <div class="ui-block-content row-content-direction">
        <div class="icon-row">
          <div class="icon"><i class="ui-icon ui-icon-lamp"></i>
          </div>
        </div>
        <div class="main-row">
          <h1 class="title">Ты сделал правильный выбор!</h1>
          <p class="description">Регистрация необходима для создания аккаунта, с помощью которого будет осуществляться вход в лаунчер и на наши серверы.</p>
        </div>
      </div>
    </div>

    <div v-if="Error.isErrored" class="ui-block-notice error">

      <div class="notice-icon">
        <div class="error"><i class="ui-icon ui-icon-close"></i>
        </div>
        <div class="success"><i class="ui-icon ui-icon-checkcircle"></i>
        </div>
      </div>

      <div class="notice-container">
        <div class="notice-title">
          <h2>{{ Error.title }}</h2>
          <button class="close" id="close-notice"><i class="ui-icon ui-icon-close"></i>
          </button>
        </div>
        <ul class="notice-description">
          <li>{{ Error.msg }}</li>
        </ul>
      </div>

    </div>


    <div class="ui-block-register ui-block">
      <h2 class="ui-title">Регистрация аккаунта</h2>
      <div class="ui-block-basic register">
        <div class="ui-block-content column-content-direction">

          <form class="ui-form ui-register-form" v-on:submit.prevent="goRegister">
            <div class="ui-form-group username">
              <div class="ui-input-row">
                <label class="name-input" for="reg_name">Придумайте себе ник</label>
                <div class="notice-group"><small>Минимум 4 символа, максимум 16</small><small class="error">Есть ошибки в логине</small><small class="success">Все хорошо!</small></div>
              </div>
              <div class="ui-input-row">
                <input v-model="Data.nick" type="text" name="login" id="reg_name" placeholder="Например, reygasai" autocomplete="off">
              </div>
            </div>
            <div class="ui-form-group email">
              <div class="ui-input-row">
                <label class="name-input" for="email">Email адрес</label>
                <div class="notice-group"><small>Минимум 4 символа</small><small class="error">Есть ошибки в написании почты..</small><small class="success">Все хорошо!</small></div>
              </div>
              <div class="ui-input-row">
                <input v-model="Data.email" type="email" name="email" id="email" placeholder="Например, reycode@yandex.ru">
              </div>
            </div>
            <div class="ui-form-group first-password">
              <div class="ui-input-row">
                <label class="name-input" for="password_one">Пароль</label>
                <div class="notice-group"><small>Сложный пароль, От 6 до 40 символов</small><small class="error">Есть ошибки в пароле..</small><small class="success">Все хорошо!</small></div>
              </div>
              <div class="ui-input-row">
                <input v-model="Data.pass1" type="password" name="password_one" id="password_one" placeholder="Пароль" autocomplete="off" oncopy="return false" oncut="return false" onpaste="return false">
              </div>
            </div>
            <div class="ui-form-group second-password">
              <div class="ui-input-row">
                <label class="name-input" for="password_two">Повторите пароль</label>
                <div class="notice-group"><small>Нужно убедится, что не допущены ошибки</small><small class="error">Пароль не совпадает или строка пуста!</small><small class="success">Все хорошо, пароли совпадают!</small></div>
              </div>
              <div class="ui-input-row">
                <input v-model="Data.pass2" type="password" name="password_two" id="password_two" placeholder="Повторите пароль" autocomplete="off" oncopy="return false" oncut="return false" onpaste="return false">
              </div>
            </div>
            <div class="ui-form-group">
              <div class="ui-input-row">
                <label class="name-input" for="password_two">Пройдите проверку на бота</label>
                <div class="notice-group"><small>Нужно убедится, что вы не робот</small><small class="error">Вы робот ;(</small><small class="success">Все хорошо, вы точно не робот!</small></div>
              </div>
              <div class="ui-input-row">
                <div class="recaptcha-register"></div>
              </div>
            </div>
            <div class="ui-form-group">
              <button class="ui-button-big icon-right" type="submit"><i class="ui-icon ui-icon-add"></i>
                <div class="name">Завершить регистрацию и создать аккаунт</div>
              </button>
            </div>
          </form>


        </div>
      </div>
    </div>
    <div class="ui-block-inforegister ui-block">
      <h2 class="ui-title">Обрати внимание</h2>
      <div class="ui-block-basic ui-block-pageinfo">
        <div class="ui-block-content row-content-direction">
          <div class="icon-row">
            <div class="icon red"><i class="ui-icon ui-icon-war-info"></i>
            </div>
          </div>
          <div class="main-row">
            <h2 class="title">Как правильно создать аккаунт</h2>
            <p class="description">Минимальная длина ника - четыре символа. Разрешены только латинские буквы, цифры и знак нижнего подчеркивания.</p>
            <p class="description">Советуем придумать новый, уникальный пароль, который будет состоять из букв нижнего и верхнего регистров не менее 16 символов.</p>
            <p class="description">Пожалуйста укажите действительный Email адрес, именно на него мы будем присылать ценную для вас информацию, например письмо с информацией о восстановлении аккаунта в случах утери доступа.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name : "Register",
  data(){
    return {
      Error: {isErrored: false, title: null, msg: null},
      Data: { nick:null, email:null, pass1: null, pass2: null }
    }
  },
  methods:{
    goRegister(){
      let self = this
      let userData = self.Data

      if( userData.nick.length > 16 || userData.nick.length < 4 ){
        self.throwError({title:'Слишком длинный, или слишком короткий... Ник', msg: 'Чувак, а покороче можно'})
      }

      if(! userData.email ){
        self.throwError({title: 'Ало балбес, где почта?', msg:'Ящик то укажи, дурило'})
      }

      if( userData.pass1 !== userData.pass2 ){
        self.throwError({title:'Чувак... Пароли то разные', msg:'Укажи одинаковые пароли, шизик'})
      }

      if( userData.pass1.length < 6 || userData.pass1.length > 40 ){
        self.throwError({title:'Чувак...Пиздец! Пароль то не по размеру', msg: 'Братишка! Ну ты серьезно? Я ща тебе покушать принесу если соблюдать не будешь'})
      }

      self.Error.isErrored = false

      self.$store.commit('setUser', {jwt: self.Data.pass1, username: self.Data.nick, group: "users"})

      self.$router.push('/')

    },
    throwError(ErrorObject){
      let self = this
      self.Error.isErrored = true
      self.Error.title = ErrorObject.title
      self.Error.msg = ErrorObject.msg
      throw new Error(Error.msg)
    }
  }
}
</script>
