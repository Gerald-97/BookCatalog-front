<template>
  <div class="signup">
      <h2>LOGIN</h2>
      <br>
      <p class="alert__message">
        {{ apiResponse.message }}
      </p>
      <form action="" class="signup__form" @submit.prevent="adminLogin">
        <div class="form__item">
          <label for="email">Email: </label>
          <input type="email" name="email" id="" v-model="email">
        </div>
        <div class="form__item">
          <label for="password">Password: </label>
          <input type="password" name="password" id="" v-model="password">
      </div>
      <button type="submit" class="btn-submit">SUBMIT</button> <br>
      <router-link to="/sign-in" class="alt-login">Don't have an account? Register</router-link>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['apiResponse'])
  },
  methods: {
    ...mapActions(['loginAdmin']),
    adminLogin() {
      this.loginAdmin({
        email: this.email,
        password: this.password
      });
    }
  },
  watch: {
    apiResponse(val) {
      if (val.type == 'success') {
        setTimeout(() => {
          this.$router.push('/bookshelf')
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
  color:  darkslateblue;
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
  margin-top: 1rem;
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