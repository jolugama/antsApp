import { Injectable } from '@angular/core';


import { select, Store } from '@ngrx/store';
import { Observable, of, merge, concat, forkJoin, combineLatest, empty } from 'rxjs';


// import { map, withLatestFrom, distinctUntilChanged } from 'rxjs/operators';
// import { ItemsService } from '@pages/ants/services/items.service';
import { Router } from '@angular/router';

import * as fromAntsActions from '@pages/ants/actions';
import * as fromAntsReducers from '@pages/ants/reducers';

import * as fromRootReducers from '@redux/reducers';
import { switchMap, map, tap, take, concatAll, debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  items$: Observable<any>;
  route$: Observable<any>;
  // keyAnts = 'ants';
  // keyMushrooms = 'mushrooms';
  constructor(
    public router: Router,
    private storeAnts$: Store<fromAntsReducers.State>,
    private storeRoot$: Store<fromRootReducers.State>,

  ) {
  }



  /**
   * carga los items del key indicado, sólo si estos no han sido cargados ya.
   * para detectar que redux coger, mira la url, si contiene la key, lo coge.
   * @param key es la palabra que debe contener la url
   */
  loadItems(key): Observable<any> {
    return this.storeRoot$.pipe(
      debounceTime(300),
      select(fromRootReducers.selectUrl),
      // tap((data) => {
      //   debugger;
      // }),
      // recojo el observable, y como voy a devoler otro observable lo enmascaro con un switchMap
      switchMap((value: string) => {
        if (this.isOnState(value, key)) {
          const temp = this.storeAnts$.pipe(
            select(fromAntsReducers.selectItemsSearch),
            take(1)
          );
          // uno los 2 y no lo devuelvo hasta tenerlos todos.
          return combineLatest(of(value), temp);
        } else {
          return combineLatest(of(value), of({ items: [] }));
        }
      }),
      distinctUntilChanged((a, b) => JSON.stringify(a[1].items) === JSON.stringify(b[1].items)),
      map((data) => {
        if (data[1].items.length === 0) {
          if (this.isOnState(data[0], key)) {
            return this.storeAnts$.dispatch(fromAntsActions.ItemsActions.loadItems());
          }
        }
      }),
    );
  }


  // getItems() {
  //   // const obj = this.getUrl;
  //   // TODO falta completar
  // }

  // getUrl() {
  // }





  // ****** private zone ******

  /**
   *
   * @param route Es el que contiene la ruta completa
   * @param word Es la palabra clave raiz, que debe contener
   */
  private isOnState(route, word): boolean {
    return route.split('/')[1].includes(word);
  }


}
