import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Education from '../components/education.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/education',
            name: 'Education',
            component: Education
        }
  ]
})
