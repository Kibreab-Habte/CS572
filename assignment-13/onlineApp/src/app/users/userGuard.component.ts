import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { DataService } from '../data.service';


@Injectable()
export class UserGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    
    for (let user of this.dataService.getCachedData().results) {
      console.log(route.params['id']);
      console.log(user.login.uuid);
      if (route.params['id'] === user.login.uuid) { 
        return of(true); 
      }
    }
    alert('Incorrect uuid, Please use a correct id')
    //this.router.navigateByUrl('users/unknown');

    return of(false)
  }
}