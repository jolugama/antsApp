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

import { Ant } from '../models';


import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AntsActions, AntsSearchActions } from '@ants/actions';
import * as fromAnts from '@ants/reducers';



@Injectable()
export class AntEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromAnts.State>
  ) { }

  search$ = createEffect(
    () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
      this.actions$.pipe(
        ofType(AntsSearchActions.searchAnts),
        // debounceTime(debounce, scheduler),
        switchMap(({ query }) => {
          if (query === '') {
            return empty;
          }

          const nextSearch$ = this.actions$.pipe(
            ofType(AntsSearchActions.searchAnts),
            skip(1)
          );

          // return this.store.pipe(select(fromAnts.selectAntsState));

          // return this.googleBooks.searchBooks(query).pipe(
          //   takeUntil(nextSearch$),
          //   map((books: Book[]) => BooksApiActions.searchSuccess({ books })),
          //   catchError(err =>
          //     of(BooksApiActions.searchFailure({ errorMsg: err.message }))
          //   )
          // );
        })

        // ofType(AntsSearchActions.searchAnts),
        // withLatestFrom(this.store),
        // .filter(([action: Action, storeState: AppState]) => {
        //   return storeState.lines.length / 100 > storeState.pages.count;
        // })

      )
  );


  // search$ = createEffect(
  //   () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
  //     this.actions$.pipe(
  //       ofType(AntsSearchActions.searchAnts),
  //       // debounceTime(debounce, scheduler),
  //       switchMap(({ query }) => {

  //         if (query === '') {
  //           return empty;
  //         }
  //         const nextSearch$ = this.actions$.pipe(
  //           ofType(AntsSearchActions.searchAnts),
  //           skip(1)
  //         );
  //         // recuperar del redux el array de hormigas en ants.ants.entities
  //         this.store.pipe(
  //           // tap(e => console.log('aea', e)),
  //           switchMap((data) => {
  //             return select(fromAnts.selectAntsState);
  //           }),
  //           // tap(e => console.log('aea', e)),
  //           map((ants: Ant[]) => AntsSearchActions.searchSuccess({ ants })),
  //           // tap(console.log),
  //           // takeUntil(nextSearch$),
  //           catchError((error) => of(AntsSearchActions.searchFailure({ error })))
  //           );

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


}
