import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/serial/NobatLeili',
      name: 'NobatLeili',
      component: ()=> import ('../components/SerialPlay/NobatLeili.vue'),
    },
    {
      path: '/serial/AftabParast',
      name: 'AftabParast',
      component: ()=> import ('../components/SerialPlay/AftabParast.vue'),
    },
    {
      path: '/serial/Jeyran',
      name: 'Jeyran',
      component: ()=> import ('../components/SerialPlay/Jeyran.vue'),
    },
    {
      path: '/serial/Yaghi',
      name: 'yaghi',
      component: ()=> import ('../components/SerialPlay/yaghi.vue'),
    },
    {
      path: '/serial/BiGonah',
      name: 'BiGonah',
      component: ()=> import ('../components/SerialPlay/BiGonah.vue'),
    },
    {
      path: '/serial/RoziRozgariMerikh',
      name: 'RoziRozgariMerikh',
      component: ()=> import ('../components/SerialPlay/RoziRozgariMerikh.vue'),
    },
    {
      path: '/serial/ShabakeMakhfiZanan',
      name: 'ShabakeMakhfiZanan',
      component: ()=> import ('../components/SerialPlay/ShabakeMakhfiZanan.vue'),
    },
    {
      path: '/serial/Mahmuni',
      name: 'Mahmuni',
      component: ()=> import ('../components/SerialPlay/Mehmuni.vue'),
    },
    {
      path: '/serial/KhoonSard',
      name: 'KhoonSard',
      component: ()=> import ('../components/SerialPlay/KhoonSard.vue'),
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: ()=> import ('../views/AboutUs.vue'),
    },
    {
      path: '/ConcatsUs',
      name: 'ConcatsUs',
      component: ()=> import ('../views/ConcatsUs.vue'),
    },
    // Actors
    
    {
      path: '/Actors/ActorTempleate',
      name: 'ActorTempleate',
      component: ()=> import ('../components/Actors/ActorTempleate.vue'),
    },
  ]
})

export default router