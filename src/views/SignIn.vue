<template>
  <div class="signup">
    <h2>REGISTER</h2>
    <p class="alert__message">
      {{ apiResponse.message }}
    </p>
    <form class="signup__form" @submit.prevent="adminSubmit">
      <div class="form__item">
          <label for="name">Name: </label>
          <input type="text" name="name" id="" v-model="name">
      </div>
      <div class="form__item">
          <label for="email">Email: </label>
          <input type="email" name="email" id="" v-model="email">
      </div>
      <div class="form__item">
          <label for="password">Password: </label>
          <input type="password" name="password" id="" v-model="password">
          <!-- <p class="alert__message" v-if="!passLength">
            Your password must be more than 7 characters
          </p> -->
      </div>
      <button type="submit" class="btn-submit">SUBMIT</button> <br>
      <router-link to="/login" class="alt-login">Already registered? Login</router-link>
    </form>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SignIn',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['apiResponse'])
  },
  methods: {
    ...mapActions(['submitAdmin']),
    adminSubmit() {
        this.submitAdmin({
          name: this.name,
          email: this.email,
          password: this.password
      })
    }
  },
  watch: {
    apiResponse(val) {
      if (val.type == 'success') {
        setTimeout(() => {
          this.$router.push('/login')
          val.message = ''
        }, 1000)
      }
    }
  }
}
</script>
<style scoped>
.signup{
  margin-top: 5px;
  text-align: center;
  color: #132227;
}
.signup h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
}
.signup__form {
  margin: auto;
  text-align: center;
  width: 500px;
}
.form__item {
  width: 370px;
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.alert__message {
  color: red;
  margin: 0;
}
.alt-login {
  text-decoration: none;
  color:  #483d8b;
}
.alt-login:hover {
  color: darkblue;
}
.form__item input{
  width: 270px;
  padding: 12px 12px;
  height: 25px;
  background: #FFFFFF;
  border: 0.5px solid #132227;
  box-sizing: border-box;
  border-radius: 5px;
}
.btn-submit {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  padding: 17px 56px;
  background-color: #132227;
  color: #F1E0D6;
  border-radius: 15px;
  transition-duration: 0.1s;
}
.btn-submit:hover{
  background-color: #b3babb;
  color: #0f1011;
  font-weight: bold;
  cursor: pointer;
}
</style>