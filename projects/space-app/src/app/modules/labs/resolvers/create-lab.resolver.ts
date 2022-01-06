import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { NewLab } from 'space-api/types';

@Injectable({
  providedIn: 'root'
})
export class CreateLabResolver implements Resolve<NewLab> {
  resolve(route: ActivatedRouteSnapshot): NewLab {
    return {
      details: {name: '', moonId: null, autonomous: false, enableTags: false},
      equipments: [],
    };
  }
}
