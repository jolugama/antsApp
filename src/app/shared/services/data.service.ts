/**
 * Servicio que transforma cualquier resultado de un redux específico en agnóstico.
 */

import { Injectable } from '@angular/core';


import { select, Store } from '@ngrx/store';
import { Observable, of, merge, concat, forkJoin, combineLatest, empty, Subject } from 'rxjs';


// import { map, withLatestFrom, distinctUntilChanged } from 'rxjs/operators';
// import { ItemsService } from '@modules/ants/services/items.service';
import { Router } from '@angular/router';

import * as fromAntsActions from '@modules/ants/actions';
import * as fromAntsReducers from '@modules/ants/reducers';

import * as fromRootReducers from '@redux/reducers';
import { switchMap, map, tap, take, concatAll, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  items$: Observable<any>;
  route$: Observable<any>;

  private itemsSource = new Subject<any>();
  public itemsAgnostic$ = this.itemsSource.asObservable();

  currentKey: string;
  keys = [
    'ants',
    'mushrooms'
  ];


  constructor(
    public router: Router,
    private storeAnts$: Store<fromAntsReducers.State>,
    private storeRoot$: Store<fromRootReducers.State>,

  ) {
  }



  /**
   * carga los items del key indicado, sólo si estos no han sido cargados ya.
   * para detectar que redux coger, mira la url, si contiene la key, lo coge.
   * key (keyAnts, keyMushrooms) es la palabra que debe contener la url
   */
  loadItems(): Observable<any> {
    return this.getSetCurrentKey().pipe(
      debounceTime(300),

      // recojo el observable, y como voy a devolver otro observable lo enmascaro con un switchMap
      switchMap((value: string) => {
        return this._getItemSearch();
      }),
      // distinctUntilChanged((a: any, b: any) => JSON.stringify(a[this.currentKey].items) === JSON.stringify(b[this.currentKey].items)),
      map((data: any) => {
        if (data[this.currentKey].items.length === 0) {
          this._loadItems();
        } else {
          // this.currentKey = '';
        }
      }),
      catchError((error) => {
        return empty();
      })

    );
  }



  getSetCurrentKey(): Observable<string> {
    return this.storeRoot$.pipe(
      select(fromRootReducers.selectUrl),
      map((value: string) => {
        const index = this.keys.indexOf(value.split('/')[1]);
        this.currentKey = this.keys[index];
        return this.keys[index];
      }),
      take(1),
      catchError(() => {
        this.currentKey = '';
        return '';
      })
    );
  }

  emitItems() {
    this.itemsSource.next();
  }


  watchRoute(): Observable<string> {
    return this.storeRoot$.pipe(
      select(fromRootReducers.selectUrl),
      map((value: string) => {
       return value;
      }),
      catchError(() => {
        return '';
      })
    );
  }


  // ****** private zone ******

  /**
   *
   * @param route Es el que contiene la ruta completa
   * @param word Es la palabra clave raiz, que debe contener
   */
  // private _isOnState(route, word): boolean {
  //   const result = route.split('/')[1].includes(word);
  //   if (result) {
  //     this.currentKey = word;
  //   }
  //   return result;
  // }

  private _loadItems(): void {
    // si es ants
    if (this.currentKey === this.keys[0]) {
      return this.storeAnts$.dispatch(fromAntsActions.ItemsActions.loadItems());
    }
  }

  private _getItemSearch(): Observable<any> {
    let result;
    // si es ants
    if (this.currentKey === this.keys[0]) {
      result = this.storeAnts$.pipe(
        select(fromAntsReducers.selectItemsSearch),
        take(1)
      );
    } else {
      result = of({ items: [] });
    }
    return result;
  }





}
