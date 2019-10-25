import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Survey} from '../shared/models/survey';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService implements Resolve<boolean> {

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Observable(observer => {
      const survey = new Survey({
        id: 1,
        name: 'HBO',
        version: '2019',
        questions: [{
          id: 1,
          name: 'First Question'
        }, {
          id: 2,
          name: 'Second Question'
        }]
      });

      observer.next(survey);
      observer.complete();
    });
  }
}
