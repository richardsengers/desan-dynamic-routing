import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ConfirmNewPasswordComponent} from './confirm-new-password/confirm-new-password.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'login/:lang',
  component: LoginComponent
}, {
  path: 'forgot-password',
  component: ForgotPasswordComponent
}, {
  path: 'confirm-new-password',
  component: ConfirmNewPasswordComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
