import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

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
        // tslint:disable-next-line:no-string-literal
        return Object.values(storeState.ants.items.entities);
      })
    );
  }
}
