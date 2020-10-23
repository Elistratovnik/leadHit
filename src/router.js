import Vue from 'vue'
import Router from 'vue-router'
import Analytics from './components/Analytics/Analytics'
import Authorization from './components/Authorization/Authorization'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Authorization
        },
        {
            path: '/analytics',
            component: Analytics
        }
    ]
})