import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EnqueteComponent} from './enquete/enquete.component';
import {EnqueteService} from '../core/enquete.service';

const routes: Routes = [{
  path: '',
  resolve: {
    survey: EnqueteService
  },
  component: EnqueteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnqueteRoutingModule {
}
