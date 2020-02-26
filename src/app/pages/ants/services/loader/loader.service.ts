import { Injectable } from '@angular/core';


import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import * as fromAntsActions from '@pages/ants/actions';
import * as fromAnts from '@pages/ants/reducers';
import { map, withLatestFrom, distinctUntilChanged } from 'rxjs/operators';

import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private store$: Store<fromAnts.State>,
    public router: Router
  ) {
  }

  loadJson() {
    this.store$.dispatch(fromAntsActions.ItemsActions.loadItems());
    console.log( 'cargando json........');

  }
}
