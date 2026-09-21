import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { DashboardHome } from '../dashboard-home/dashboard-home';
import { Profile } from '../profile/profile';
import { Settings } from '../settings/settings';
import { dashChildGuard } from '../../guards/dash-child-guard';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    canActivateChild: [dashChildGuard],
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
        //component: Orders,
        loadComponent:
          () =>
            import('../orders/orders').then(c=>c.Orders)
      },
    ],
  },
];
