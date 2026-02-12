import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private response: ServiceService,private router: Router) {}

  canActivate(): boolean {
   if(this.response.Isresult()){
    return true;
   } else {
    this.router.navigate(['/home']);
   return false;
   }
  }
  
}


