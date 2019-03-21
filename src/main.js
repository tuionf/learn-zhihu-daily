// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(MintUI)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state : {
    drawer: false,
    circleFlag: false,
    num: 1,
		theme:{},
		article:{},
		before:''
  },
  mutations: {
    add: (state,n) => state.num = n,
    back (state,n) {
      if ( n ) {
        state.drawer = false
      } else {
        state.drawer = true
      }
    },
    toggle( state, n ) {
			if ( n ) {
				state.circleFlag = true
			} else {
				state.circleFlag = false
			}
		}
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
