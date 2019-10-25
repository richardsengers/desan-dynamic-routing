import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, NavigationExtras, Resolve, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService implements CanActivate {
  basePath: string;
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.basePath = '/' + Object.values(state.root.firstChild.params).join('/') + '/';
    return true;
  }

  navigateByUrl(url: string, state: RouterStateSnapshot, navigationExtras?: NavigationExtras): Promise<boolean> {
    return this.router.navigateByUrl(this.basePath + url, navigationExtras);
  }
}
