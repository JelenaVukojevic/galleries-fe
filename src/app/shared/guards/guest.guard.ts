import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService) {
  }

  canActivate( routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated) {
        this.router.navigate(['/']);
    }

    return true;
  }
}