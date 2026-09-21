import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { NotFound } from './pages/not-found/not-found';
import { ProductDetails } from './pages/product-details/product-details';
import { dashboardMatchGuard } from './guards/dashboard-match-guard';

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
    loadComponent:
      ()=>
        import('./pages/products/products').then(c=>c.Products) //lazy load component
  },
  {
    path: 'pages/product-details/:id',
    component: ProductDetails,
  },
  {
    path: 'pages/dashboard',
    //component: Dashboard,
    //canActivate: [authGuard],
    canMatch: [dashboardMatchGuard],
    loadChildren:
      () =>
        import('./pages/dashboard/dashboard.routes').then(r => r.DASHBOARD_ROUTES)
  },
  {
    path: '**',
    component: NotFound,
  },
];
