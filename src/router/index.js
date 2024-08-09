import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'shoeOwn'
      },
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'shoeOwn-login'
      },
    },
    {
      path: '/shop1',
      name: 'shop1',
      component: () => import('../views/Shop1View.vue'),
      meta: {
        title: 'shoeOwn-shop1'
      },
    },
    {
      path: '/shop2',
      name: 'shop2',
      component: () => import('../views/Shop2View.vue'),
      meta: {
        title: 'shoeOwn-shop2'
      },
    },
    {
      path: '/shop3',
      name: 'shop3',
      component: () => import('../views/Shop3View.vue'),
      meta: {
        title: 'shoeOwn-shop3'
      },
    },
    {
      path: '/shop4',
      name: 'shop4',
      component: () => import('../views/Shop4View.vue'),
      meta: {
        title: 'shoeOwn-shop4'
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router
