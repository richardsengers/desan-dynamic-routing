import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute, CanActivateChild
} from '@angular/router';
import {RoutingService} from '../routing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private routingService: RoutingService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // if logged in then return true;
    // if not logged in return false and redirect
    return new Promise((resolve, reject) => {
      const isAuthenticated = route.queryParams.auth === '1' ? true : false;
      if (isAuthenticated) {
        resolve(isAuthenticated);
        return;
      }
      this.routingService.navigateByUrl('auth/login', state, {queryParamsHandling: 'merge'}).then(() => {
        resolve(isAuthenticated);
      });
    });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.canActivate(route, state);

  }
}
