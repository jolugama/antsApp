import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import {
  AntsActions
} from '../actions';
import { Ant } from '../models';
// import { BookStorageService } from '@example-app/core/services';

@Injectable()
export class CollectionAntsEffects {

  constructor(
    private actions$: Actions,
    public http: HttpClient
    // private storageService: BookStorageService
  ) { }

  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the supported call in `defer` makes
   * effect easier to test.
   */
  // checkStorageSupport$ = createEffect(
  //   () => defer(() => this.storageService.supported()),
  //   { dispatch: false }
  // );



  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AntsActions.loadAntsCollection),
      switchMap(() =>
        this.http.get('assets/data/ants.json').pipe(
          // tap(console.log),
          map((ants: Ant[]) =>

            AntsActions.loadAntsSuccess({ ants }),
          ),
          catchError((error) => of(AntsActions.loadAntsFailure({ error }))
          )
        )

      )
    )
  );



  // addBookToCollection$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SelectedBookPageActions.addBook),
  //     mergeMap(({ book }) =>
  //       this.storageService.addToCollection([book]).pipe(
  //         map(() => CollectionApiActions.addBookSuccess({ book })),
  //         catchError(() => of(CollectionApiActions.addBookFailure({ book })))
  //       )
  //     )
  //   )
  // );

  // removeBookFromCollection$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SelectedBookPageActions.removeBook),
  //     mergeMap(({ book }) =>
  //       this.storageService.removeFromCollection([book.id]).pipe(
  //         map(() => CollectionApiActions.removeBookSuccess({ book })),
  //         catchError(() => of(CollectionApiActions.removeBookFailure({ book })))
  //       )
  //     )
  //   )
  // );


}
