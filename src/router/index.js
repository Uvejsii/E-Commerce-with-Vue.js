import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import CartView from "@/views/CartView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import ProductView from "@/views/ProductView.vue";
import SignupView from "@/views/AccountView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductView
        },
        {
            path: '/account',
            name: 'account',
            component: SignupView
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: FavoritesView
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView
        }
    ]
})

export default router
