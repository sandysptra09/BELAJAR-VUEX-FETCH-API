import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


import ProductsViews from '../views/ProductsView.vue'
import SingleProduct from '../views/SingleProduct.vue'
import CategoryView from '../views/CategoryView.vue'
import LoginView from '../views/LoginView.vue'

import ContactView from '../views/ContactView.vue'

const routes = [
    {
      path: '/',
      name: 'products',
      component: ProductsViews
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsViews
    },
    {
      path: "/product/:id",
      name: "SingleProduct",
      component: SingleProduct,
    },
    {
      path: '/category',
      name: 'Category',
      component: CategoryView
    },
    {
      path: '/collection',
      name: 'Collection',
      component: ProductsViews
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
      meta: { requiresGuest: true },
    },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router