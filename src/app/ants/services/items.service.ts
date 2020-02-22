import { Injectable } from '@angular/core';
import { of, timer, Observable } from 'rxjs';
import { map, withLatestFrom, distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';

import * as fromItems from '@ants/reducers';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private store$: Store<fromItems.State>,
  ) { }

  getItems(query) {
    return of(query).pipe(
      withLatestFrom(this.store$),
      map(([action, storeState]) => {
        return Object.values(storeState.ants.items.entities);
      }),
    );
  }
}
