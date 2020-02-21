import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs/operators';


import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ItemsActions, SearchActions, FiltersActions } from '../actions';

import { HttpClient } from '@angular/common/http';

import { Ant } from '../models';
import * as fromItems from '../reducers';


@Injectable()
export class ItemEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<fromItems.State>,
    public http: HttpClient
  ) { }


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


  // carga json
  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchItems),
      switchMap(({ query }) => {

        if (query === '') {
          return empty;
        }

        const nextSearch$ = this.actions$.pipe(
          ofType(SearchActions.searchItems),
          skip(1)
        );

        return of(query).pipe(
          tap(console.log),
          map((items: Ant[]) => {
            return SearchActions.searchSuccess({ items });
          })
        );


      })




    )

  );



  // search$ = createEffect(
  //   () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
  //     this.actions$.pipe(
  //       ofType(FiltersActions.buscarItemsBuscador),
  //       debounceTime(debounce, scheduler),
  //       switchMap(({ query }) => {
  //         if (query === '') {
  //           return empty;
  //         }

  //         const nextSearch$ = this.actions$.pipe(
  //           ofType(FiltersActions.buscarItemsBuscador),
  //           skip(1)
  //         );

  //         return this.store.pipe(
  //           select(fromItems.selectAntsArrayState),
  //           takeUntil(nextSearch$),
  //           map((ant: Ant[]) => {
  //             return [];
  //           })
  //         );

  //         // this.store.pipe(
  //         //   select(fromItems.selectAntsArrayState),
  //         //   map((id, entities) => {
  //         //     return entities;
  //         //   }
  //         //   )
  //         // );

  //         // return switchMap(() => {
  //         //   // return select(fromItems.selectAntsArrayState);
  //         //   return this.store.pipe(
  //         //     select(fromItems.selectAntsArrayState),
  //         //     // tap((r) => console.log('xx', r))

  //         //   );
  //         // });

  //         // return this.googleBooks.searchBooks(query).pipe(
  //         //   takeUntil(nextSearch$),
  //         //   map((books: Book[]) => BooksApiActions.searchSuccess({ books })),
  //         //   catchError(err =>
  //         //     of(BooksApiActions.searchFailure({ errorMsg: err.message }))
  //         //   )
  //         // );
  //       })
  //     )
  // );






  // search$ = createEffect(
  //   () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
  //     this.actions$.pipe(
  //       ofType(FindBookPageActions.searchBooks),
  //       debounceTime(debounce, scheduler),
  //       switchMap(({ query }) => {
  //         if (query === '') {
  //           return empty;
  //         }

  //         const nextSearch$ = this.actions$.pipe(
  //           ofType(FindBookPageActions.searchBooks),
  //           skip(1)
  //         );

  //         return this.googleBooks.searchBooks(query).pipe(
  //           takeUntil(nextSearch$),
  //           map((books: Book[]) => BooksApiActions.searchSuccess({ books })),
  //           catchError(err =>
  //             of(BooksApiActions.searchFailure({ errorMsg: err.message }))
  //           )
  //         );
  //       })
  //     )
  // );



}
