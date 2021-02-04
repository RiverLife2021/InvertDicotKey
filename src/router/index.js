import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Keys from '@/components/Keys.vue'
import Couplets from '@/components/Couplets.vue'
import Results from '@/components/Results.vue'
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
  props: { keyData: keyData },
})

routes.push({
  name: 'Couplets',
  path: '/key/:kId/:qId',
  component: Couplets,
  props: { keyData: keyData, imgData: images },
})

routes.push({
  name: 'Results',
  path: '/results/:name',
  component: Results,
  props: { keyData: keyData, imgData: images },
})

const router = createRouter({
  // FIXME: change for real build
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
