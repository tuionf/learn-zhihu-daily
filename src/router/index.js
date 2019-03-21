import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import test from '@/components/test'
import article from '@/components/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
			path: '/article',
			component: article,
			name: 'article'
		}
  ]
})
