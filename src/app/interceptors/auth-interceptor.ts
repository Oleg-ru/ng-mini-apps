import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // const modifiedReq = req.clone({
  //   setHeaders: {
  //     'X-app-version': '1.0'
  //   }
  // });
  // return next(modifiedReq);

  //JWT Authentication
  const token = localStorage.getItem('token');
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }
  return next(req);
};
