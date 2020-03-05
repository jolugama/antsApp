import { Injectable, HostListener } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { debounceTime, switchMap, map, catchError, tap, take, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as Fuse from 'fuse.js';

import * as fromItemsActions from '@modules/ants/actions';
import * as fromItemsReducers from '@modules/ants/reducers';
import * as fromRootReducers from '@redux/reducers';


@Injectable({
  providedIn: 'root'
})
export class AntsService {
  nameRedux = 'ants';
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



  getItems(filters, keys) {
    let query = filters.query;
    query = this.removeTildes(query);
    return of(query).pipe(
      withLatestFrom(this.storeItems$),
      map(([action, store]) => {

        const items = Object.values(store[this.nameRedux].items.entities);

        if (query === '') {
          return items;
        }

        // parámetros para fuse, librería de búsqueda
        var options = {
          shouldSort: true,
          threshold: 0.4,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys
        };
        var fuse = new Fuse(items, options); // "list" is the item array
        var result = fuse.search(query);
        // debugger;
        return result;
      }),
    );
  }


  removeTildes(input) {
    const tittles = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç';
    const original = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc';

    for (let i = 0; i < tittles.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < input.length; j++) {
        input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
      }

    }
    return input;
  }


  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   debugger;
  //   this.innerWidth = window.innerWidth;
  // }

}
