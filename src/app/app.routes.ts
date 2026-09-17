import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { NotFound } from './pages/not-found/not-found';

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
    component: Products,
  },
  {
    path: '**',
    component: NotFound,
  },
];
