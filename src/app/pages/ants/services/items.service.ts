import { Injectable } from '@angular/core';
import { of, timer, Observable } from 'rxjs';
import { map, withLatestFrom, distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';

import * as fromItems from '@pages/ants/reducers';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  query = '';
  constructor(
    private store$: Store<fromItems.State>,
  ) { }

  getItems(query) {
    this.query = this.removeTildes(query);
    return of(query).pipe(
      withLatestFrom(this.store$),
      map(([action, storeState]) => {

        const items = Object.values(storeState.ants.items.entities);
        const result = [];
        if (this.query === '') {
          return items;
        }
        for (const item of items) {
          let resultado = true;

          this.query.split('').map((d) => {
            if (item.taxonomy.specie.includes(d) === false &&
            item.taxonomy.subfamily.includes(d) === false ) {
              resultado = false;
            }
          });

          if (resultado) {
            result.push(item);
          }


        }
        // debugger;
        return result;
      }),
    );
  }


  removeTildes(input) {
    const tittles = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç';
    const original = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc';

    for (let i = 0; i < tittles.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < input.length; j++) {
        input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
      }

    }
    return input;
  }
}
