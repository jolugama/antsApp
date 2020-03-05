import { Injectable, HostListener } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { debounceTime, switchMap, map, catchError, tap, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';


import * as fromItemsActions from '@modules/ants/actions';
import * as fromItemsReducers from '@modules/ants/reducers';
import * as fromRootReducers from '@redux/reducers';


@Injectable({
  providedIn: 'root'
})
export class AntsService {
  innerWidth = window.innerWidth;
  constructor(
    public router: Router,
    private storeItems$: Store<fromItemsReducers.State>,
    private storeRoot$: Store<fromRootReducers.State>,
  ) { }


  loadItems(): void {
    // ejecuto accion cargar Items
    this.storeItems$.dispatch(fromItemsActions.ItemsActions.loadItems());
  }

  getWidth() {
    return this.innerWidth;
  }


  /**
   * devuelve observable de state search, con los items actuales filtrados
   */
  getFilteredItems(): Observable<any> {
    return this.storeItems$.pipe(
      select(fromItemsReducers.selectItemsSearch)
    );
  }


  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   debugger;
  //   this.innerWidth = window.innerWidth;
  // }

}
