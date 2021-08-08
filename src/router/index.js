import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Error from '@/pages/error'
import Manage from '@/pages/manage/index'
import Home from '@/pages/manage/home'
import BaseTable from '@/pages/manage/base-table'
import BaseForm from '@/pages/manage/base-form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'base/table',
          name: 'base-table',
          component: BaseTable
        },
        {
          path: 'base/form',
          name: 'base-form',
          component: BaseForm
        }
      ],
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})
