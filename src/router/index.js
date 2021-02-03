import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Keys from '@/components/Keys.vue'
import Couplets from '@/components/Couplets.vue'
import Families from '@/components/Families.vue'
import keyData from '@/assets/keyData.json'
import images from '@/assets/images.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

routes.push({
  name: 'Key',
  path: '/key',
  component: Keys,
  props: { data: keyData },
})

routes.push({
  name: 'Couplets',
  path: '/key/:kId/:qId',
  component: Couplets,
  props: { data: keyData, imgData: images },
})

routes.push({
  name: 'Families',
  path: '/family/:name',
  component: Families,
  props: { data: keyData, imgData: images },
})

const router = createRouter({
  // FIXME: change for real build
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
