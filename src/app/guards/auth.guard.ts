import { inject } from '@angular/core';
import {CanActivate, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivate =(route, state)=>{
  if( sessionStorage.getItem('email'))
  {
    return true;
  }
  else{
    const router = inject(Router);
    return  router.navigate(['login']);
  }
}


