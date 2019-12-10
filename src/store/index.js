import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
// import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    response: {
      message: "",
      type: ""
    },
    token: localStorage.getItem("token") || null
  },
  getters: {
    isLoggedIn: function(state) {
      if (state.token != null) {
        return true;
      } else {
        return false;
      }
    },
    getToken: state => {
      return state.token !== null;
    },
    apiResponse: state => state.response
  },
  mutations: {
    retrieveToken: (state, token) => {
      state.token = token;
    },
    destroyToken: (state) => {
      state.token = null;
    },
    getResponse: (state, payload) => {
      state.response = {
        type: payload.type,
        message: payload.message
      }
    }
  },
  actions: {
    submitAdmin(context, val) {
      Axios.post('https://gerald-book-catalog.herokuapp.com/admin/signup', {
        name: val.name,
        email: val.email,
        password: val.password
      })
      .then( response => {
        let responseObject = {
          type: "success",
          message: response.data.message
        };
        context.commit('getResponse', responseObject)
      })

      .catch(error => {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message || 'Invalid Registration'
        }

        context.commit('getResponse', responseObject);
      })
    },

    loginAdmin(context, credentials) {
      Axios.post("https://gerald-book-catalog.herokuapp.com/admin/login", {
        email: credentials.email,
        password: credentials.password
      })
      .then(response => {
        const token = response.data.token;
        
        let responseObject = {
          type: "success",
          message: response.data.message
        };

        localStorage.setItem("token", token);
        context.commit("retrieveToken", token);

        context.commit("getResponse", responseObject);

      })
      .catch(error => {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }

        context.commit('getResponse', responseObject)
      })
    },
    logoutAdmin: (context) => {
      localStorage.removeItem("token")
      context.commit('destroyToken')
    }
  }
});
