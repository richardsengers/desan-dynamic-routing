import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Customer} from '../shared/models/customer';
import {Observable, of} from 'rxjs';
import {Survey} from '../shared/models/survey';

@Injectable({
  providedIn: 'root'
})
export class WhoamiService implements Resolve<Customer> {
  whoami: Customer;
  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> {
    // return of(new Survey({
    //       id: 1,
    //       name: 'SIS'
    //     }));

    return new Observable(observer => {
      const customer = new Customer({
        id: 1,
        name: 'SIS'
      });

      this.whoami = customer;
      observer.next(customer);
      observer.complete();
    });
  }
}
