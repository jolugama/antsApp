import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, merge, timer } from 'rxjs';
import { map, switchMapTo, tap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { UserActions } from '../actions';

@Injectable()
export class UserEffects {
  clicks$ = fromEvent(document, 'click');
  keys$ = fromEvent(document, 'keydown');
  mouse$ = fromEvent(document, 'mousemove');

  constructor(
    private actions$: Actions,
    private router: Router
  ) { }

  // Efecto que se lanza solo, al hacer click, mover el ratón o escribir algo, cuenta 1 minuto
  // Transcurrido ese minuto, se considera inactividad y efectua acción idleTimeOut
  idle$ = createEffect(() =>
    merge(this.clicks$, this.keys$, this.mouse$).pipe(
      switchMapTo(timer(1 * 60 * 1000)), // Tiempo de inactividad --> 1 minuto
      map(() => UserActions.idleTimeout()),
      tap(msg => console.log('inactivity timeout', msg))
    )
  );

  // Lo llama idle$ si hay inactividad. Se va a otra ruta. Modificar a otra.
  // se usa dispatch para eliminar posibles bucles.
  logoutIdleUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.idleTimeout), // si llaman a la acción idleTimeout
      tap(() => this.router.navigate(['/']))
    ),
    { dispatch: false }
  );
}
