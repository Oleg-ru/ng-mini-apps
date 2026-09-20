import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { NotFound } from './pages/not-found/not-found';
import { ProductDetails } from './pages/product-details/product-details';
import { Dashboard } from './pages/dashboard/dashboard';
import { DashboardHome } from './pages/dashboard-home/dashboard-home';
import { Profile } from './pages/profile/profile';
import { Settings } from './pages/settings/settings';
import { Orders } from './pages/orders/orders';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'pages/home',
    component: Home,
  },
  {
    path: 'pages/about',
    component: About,
  },
  {
    path: 'pages/contact',
    component: Contact,
  },
  {
    path: 'pages/products',
    //component: Products,
    loadComponent: ()=>import('./pages/products/products').then(c=>c.Products) //lazy load component
  },
  {
    path: 'pages/product-details/:id',
    component: ProductDetails,
  },
  {
    path: 'pages/dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        redirectTo: 'dashboardHome',
        pathMatch: 'full',
      },
      {
        path: 'dashboardHome',
        component: DashboardHome,
      },
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'settings',
        component: Settings,
      },
      {
        path: 'orders',
        component: Orders,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
