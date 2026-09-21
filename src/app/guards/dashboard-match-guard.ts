import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const dashboardMatchGuard: CanMatchFn = () => {
  const router = inject(Router);
  const isLoggedIn = false;

  if (isLoggedIn) return true;

  return router.createUrlTree(['/login']);
};
