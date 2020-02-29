/**
 * Es el encargado de vertificar en el redux router en qué ruta estamos
 *
 */

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { DataService } from '@shared/services/data.service';
import * as searcher from '@shared/components/searcher/interfaces';


import { Observable, combineLatest, of } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import * as fromAntsReducers from '@pages/ants/reducers';
import * as fromAntsActions from '@pages/ants/actions';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit, OnDestroy {

  searcher: searcher.Out;
  items$: Observable<any>; // donde se almacena los items a mostrar (los filtrados)

  constructor(
    private dataService: DataService,
    private storeItems$: Store<fromAntsReducers.State>,

  ) {

    // almaceno todos los items
    this.items$ = storeItems$.pipe(
      select(fromAntsReducers.selectItemsSearch)
    );

    this.dataService.getSetCurrentKey().pipe(
      map(key => {
        return distinctUntilChanged((a, b) => JSON.stringify(a[key].items) === JSON.stringify(b[key].items));
      })
    ).subscribe(res => {

      console.log('carga ', res);
    });

  }

  ngOnInit() {

  }

  // recibe del componente buscador y guarda el objeto en searcher.
  onSearch(out: searcher.Out) {
    this.searcher = out;
    this.findItems(this.searcher.value);
  }

  findItems(query: string) {
    this.storeItems$.dispatch(fromAntsActions.SearchActions.searchItems({ query }));
  }

  ngOnDestroy(): void {
    throw new Error('se destruye item-page');
  }

}
