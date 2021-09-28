import Login from '@/views/Login'
import Home from '@/views/Home'
import Hero from '@/views/Hero'
import Profile from '@/views/Profile'
import Error404 from '@/views/Error404'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/hero/:id',
    name: 'Hero',
    component: Hero,
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { login: true },
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/404',
    name: '404',
    component: Error404,
  },
  {
    path: '*',
    redirect: '/404',
  },
]
