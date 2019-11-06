import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import demo_Day2 from '@/components/demo_Day2'

import BindClassStyle from '@/components/BindClassStyle.vue'
import UserDashboard from '@/components/UserDashboard.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },


        {
            path: '/bind',
            name: 'BindClassStyle',
            component: BindClassStyle
        },
        {
            path: '/dashboard',
            name: 'UserDashboard',
            component: UserDashboard
        }
    ]
})