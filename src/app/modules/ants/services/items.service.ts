import { Injectable } from '@angular/core';
import { of, timer, Observable } from 'rxjs';
import { map, withLatestFrom, distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';

import * as fromItems from '@modules/ants/reducers';
import { Store } from '@ngrx/store';
import * as Fuse from 'fuse.js';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private store$: Store<fromItems.State>,
  ) { }



}
