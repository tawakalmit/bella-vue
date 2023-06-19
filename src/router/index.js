import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Tentangkami from '../views/Tentangkami.vue'
import Produk from '../views/Produk.vue'
import Toko from '../views/Toko.vue'
import Info from '../views/Info.vue'
import Berita from '../views/Berita.vue'
import Kontak from '../views/Kontak.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/tentangkami',
      name: 'tentangkami',
      component: Tentangkami
    },
    {
      path: '/produk',
      name: 'produk',
      component: Produk
    },
    {
      path: '/toko',
      name: 'toko',
      component: Toko
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/berita',
      name: 'berita',
      component: Berita
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: Kontak
    },
  ]
})

export default router
