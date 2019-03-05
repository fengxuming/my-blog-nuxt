import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _6f86e37e = () => interopDefault(import('../pages/config/login.vue' /* webpackChunkName: "pages/config/login" */))
const _53fbb87a = () => interopDefault(import('../pages/edit/addBlog.vue' /* webpackChunkName: "pages/edit/addBlog" */))
const _da8e3f76 = () => interopDefault(import('../pages/sp/auth.vue' /* webpackChunkName: "pages/sp/auth" */))
const _6edd130a = () => interopDefault(import('../pages/sp/resume.vue' /* webpackChunkName: "pages/sp/resume" */))
const _2c77b8d3 = () => interopDefault(import('../pages/util/formatTime.js' /* webpackChunkName: "pages/util/formatTime" */))
const _0c2ea83e = () => interopDefault(import('../pages/detail/_postId.vue' /* webpackChunkName: "pages/detail/_postId" */))
const _9a553886 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/config/login",
      component: _6f86e37e,
      name: "config-login"
    }, {
      path: "/edit/addBlog",
      component: _53fbb87a,
      name: "edit-addBlog"
    }, {
      path: "/sp/auth",
      component: _da8e3f76,
      name: "sp-auth"
    }, {
      path: "/sp/resume",
      component: _6edd130a,
      name: "sp-resume"
    }, {
      path: "/util/formatTime",
      component: _2c77b8d3,
      name: "util-formatTime"
    }, {
      path: "/detail/:postId?",
      component: _0c2ea83e,
      name: "detail-postId"
    }, {
      path: "/",
      component: _9a553886,
      name: "index"
    }],

    fallback: false
  })
}
