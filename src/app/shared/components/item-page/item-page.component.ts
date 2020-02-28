/**
 * Es el encargado de vertificar en el redux router en qué ruta estamos
 *
 */

import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { DataService } from '@shared/services/data.service';
import * as searcher from '@shared/components/searcher/interfaces';

import * as fromAntsReducers from '@pages/ants/reducers';
import * as fromAntsActions from '@pages/ants/actions';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit {
  searcher: searcher.Out;


  constructor(
    private dataService: DataService,
    private storeAnts$: Store<fromAntsReducers.State>,

    ) { }

  ngOnInit() {

  }

  // recibe del componente buscador y guarda el objeto en searcher.
  onSearch(out: searcher.Out) {
    this.searcher = out;
    // console.log(out.value);
    this.findItems(this.searcher.value);
  }

  findItems(query: string) {
    // console.log(query);
    this.storeAnts$.dispatch(fromAntsActions.SearchActions.searchItems({ query }));
    // setTimeout(() => {
    //   const itemsMock: Ant[] = [];
    //   this.store.dispatch(SearchActions.searchSuccess({ items: itemsMock }));
    // }, 2000);
  }

}
