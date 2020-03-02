import { Injectable } from '@angular/core';


import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import * as fromRootReducers from '@redux/reducers';
import * as fromRootActions from '@redux/core/actions';

import * as fromAntsActions from '@modules/ants/actions';
import * as fromAntsReducers from '@modules/ants/reducers';

import { map, withLatestFrom, distinctUntilChanged } from 'rxjs/operators';

import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private storeAnts$: Store<fromAntsReducers.State>,
    private storeRoot$: Store<fromRootReducers.State>,
    public router: Router
  ) {
  }

  loadJson() {
    this.getUrl();
    this.storeAnts$.dispatch(fromAntsActions.ItemsActions.loadItems());
    console.log('cargando json........');
  }

  getUrl() {

  }

  getItems() {
    this.getUrl();
  }
}
