import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
    meta: {
      requireGuest: true
    },
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) {
        next("/bookshelf");
      } else {
        next();
      }
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requireGuest: true
    },
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) {
        next("/bookshelf");
      } else {
        next();
      }
    }
  },
  {
    path: "/bookshelf",
    name: "Gallery",
    component: () => import("../views/Gallery.vue")
  },
  {
    path: "/bookshelf/view/:id",
    name: "ViewBook",
    component: () => import("../views/ViewBook.vue")
  },
  {
    path: "/bookshelf/add",
    name: "CreateBook",
    component: () => import("../views/CreateBook.vue"),
    meta: {
      requireAdmin: true
    },
    beforeEnter: (to, from, next) => {
      if (!store.getters.isLoggedIn) {
        next("/login");
      } else {
        next();
      }
    }
  },
  {
    path: "/bookshelf/edit/:id",
    name: "EditBook",
    component: () => import("../views/EditBook.vue"),
    meta: {
      requireAdmin: true
    },
    beforeEnter: (to, from, next) => {
      if (!store.getters.isLoggedIn) {
        next("/login");
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAdmin)){
//     if(!store.getters.isLoggedIn) {
//       next('/login')
//     } else {
//       next()
//     }
//   } else if (to.matched.some(record => record.meta.requireGuest)){
//     if (store.getters.isLoggedIn) {
//       next("/bookshelf");
//     } else {
//       next();
//     }
//   }
// })


export default router
