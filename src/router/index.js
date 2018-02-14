import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Education from '../components/education.vue'
import Experience from '../components/experience.vue'
import Skills from '../components/skills.vue'

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
        },
        {
            path: '/experience',
            name: 'Experience',
            component: Experience
        },
        {
            path: '/skills',
            name: 'Skills',
            component: Skills
        }
  ]
})
