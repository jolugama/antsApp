import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { debounceTime, switchMap, map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';


import * as fromItemsActions from '@pages/ants/actions';
import * as fromItemsReducers from '@pages/ants/reducers';
import * as fromRootReducers from '@redux/reducers';


@Injectable({
  providedIn: 'root'
})
export class AntsService {

  constructor(
    public router: Router,
    private storeItems$: Store<fromItemsReducers.State>,
    private storeRoot$: Store<fromRootReducers.State>,
  ) { }


  loadItems(): void {
    // ejecuto accion cargar Items
    this.storeItems$.dispatch(fromItemsActions.ItemsActions.loadItems());
  }

  getItems(): Observable<fromItemsReducers.SearchState> {
    return this.storeItems$.pipe(
      select(fromItemsReducers.selectItemsSearch)
    );
  }


}
