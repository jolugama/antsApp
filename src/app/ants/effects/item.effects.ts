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

import { ItemsActions, SearchActions, FiltersActions } from '../actions';
import * as fromItems from '../reducers';



@Injectable()
export class ItemEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromItems.State>
  ) { }

  search$ = createEffect(
    () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
      this.actions$.pipe(
        ofType(FiltersActions.buscarItemsBuscador),
        debounceTime(debounce, scheduler),
        switchMap(({ query }) => {
          if (query === '') {
            return empty;
          }

          const nextSearch$ = this.actions$.pipe(
            ofType(FiltersActions.buscarItemsBuscador),
            skip(1)
          );

          // return this.googleBooks.searchBooks(query).pipe(
          //   takeUntil(nextSearch$),
          //   map((books: Book[]) => BooksApiActions.searchSuccess({ books })),
          //   catchError(err =>
          //     of(BooksApiActions.searchFailure({ errorMsg: err.message }))
          //   )
          // );
        })
      )
  );

}
