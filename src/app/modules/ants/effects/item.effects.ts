import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of, timer } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
  distinctUntilChanged,
} from 'rxjs/operators';


import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ItemsActions, SearchActions, FiltersActions } from '../actions';

import { HttpClient } from '@angular/common/http';

import { Ant } from '../models';
import * as fromItems from '../reducers';


import { AntsService } from '../services/ants.service';


@Injectable()
export class ItemEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<fromItems.State>,
    public http: HttpClient,
    private itemsService: AntsService
  ) {

  }


  // carga json
  loadItemsJSON$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      switchMap(() =>
        this.http.get('assets/data/ants.json').pipe(
          // tap(console.log),
          map((items: Ant[]) => {
            // es ok. llama a acción, y este al reducer de la acción,
            // la cual añade en entities con addMany
            return ItemsActions.loadItemsSuccess({ items });
          }
          ),
          catchError((error) => of(ItemsActions.loadItemsFailure({ error }))
          )
        )

      )
    )
  );


  // Cuando carga el json satisfactoriamente, hace un primer filtro vacío para obtener el array de items.
  loadItemsJsonSuccess$ = createEffect(
    () => ({ debounce = 0, scheduler = asyncScheduler } = {}) =>
      this.actions$.pipe(
        ofType(ItemsActions.loadItemsSuccess),
        debounceTime(debounce, scheduler),
        switchMap(({ items }) => {
          const query = '';
          return of(SearchActions.searchItems({ query }));

        })

      )
  );


  // muestra un array de items con los filtros actuales aplicados
  search$ = createEffect(
    () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
      this.actions$.pipe(
        ofType(SearchActions.searchItems),
        debounceTime(debounce, scheduler),
        switchMap(({ query }) => {
          // if (query === '') { 
          //   return empty;
          // }

          // si hay varias peticiones de esta misma acción
          // solo se procesará 1.
          const nextSearch$ = this.actions$.pipe(
            ofType(SearchActions.searchItems),
            skip(1)
          );

          const filters = {
            query
          }
          const keys = [
            "taxonomy.specie",
            "taxonomy.subfamily"
          ];


          return this.itemsService.getItems(filters, keys).pipe(
            tap(e => console.log('search$')),
            takeUntil(nextSearch$),
            tap(console.log),
            map((items: Ant[]) => SearchActions.searchSuccess({ items })),
            catchError(err =>
              of(SearchActions.searchFailure({ error: err.message }))
            )
          );

        })
      )

  );




}
