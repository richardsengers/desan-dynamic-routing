import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './core/auth/auth.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BaseComponent} from './base/base.component';
import {RoutingService} from './core/routing.service';
import {DesanLoginComponent} from './auth/desan-login/desan-login.component';
import {WhoamiService} from './core/whoami.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: ':test1/:test2',
    component: BaseComponent,
    canActivate: [RoutingService],
    resolve: {
      whoami: WhoamiService
    },
    children: [{
      canActivateChild: [AuthGuard],
      path: 'enquete',
      loadChildren: () => import('./enquete/enquete.module').then(m => m.EnqueteModule)
    }, {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }]
  }, {
    path: '404',
    component: PageNotFoundComponent
  }, {
    path: 'login',
    component: DesanLoginComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
