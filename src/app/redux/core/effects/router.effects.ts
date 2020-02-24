import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { tap, filter, map, mergeMap } from 'rxjs/operators';

import { createEffect } from '@ngrx/effects';

@Injectable()
export class RouterEffects {
  // recoge el valor data que se indica en un módulo routing y lo añade al título
  // se debe pasar así:  data: { title: 'Home' }
  updateTitle$ = createEffect(
    () =>
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) { route = route.firstChild; }
          return route;
        }),
        mergeMap(route => route.data),
        // tslint:disable-next-line:no-string-literal
        map(data => `AntApp  - ${data['title']} `),
        tap(title => this.titleService.setTitle(title))
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) { }
}
