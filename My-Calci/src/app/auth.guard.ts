import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private response: ServiceService,private router: Router) {}

  canActivate(): boolean {
   if(this.response.Islogin()){
    return true;
   } else {
    this.router.navigate(['/login']);
   return false;
   }
  }
  
}


