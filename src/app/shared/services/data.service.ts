import { Injectable } from '@angular/core';


import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { ItemsActions, SearchActions, FiltersActions } from '@pages/ants/actions';
import * as fromItems from '@pages/ants/reducers';
import { map, withLatestFrom, distinctUntilChanged } from 'rxjs/operators';
import { ItemsService } from '@pages/ants/services/items.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  items$: Observable<any>;
  constructor(
    private store$: Store<fromItems.State>,
    public router: Router
  ) { }

  getUrl() {
    return 'ants'; // TODO  recuperarlo de router de redux
  }

  loadItems() {
    this.store$.dispatch(ItemsActions.loadItems());
  }

  getItems() {
    const obj = this.getUrl;
    // TODO falta completar
  }


}
