import { Component, OnInit } from '@angular/core';

// import { IonSearchbar } from '@ionic/angular';



import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ItemsActions, SearchActions, FiltersActions } from '@ants/actions';
import * as fromItems from '@ants/reducers';
import { map } from 'rxjs/operators';
// import { Ant } from '@ants/models';


@Component({
  selector: 'app-ants',
  templateUrl: './ants.component.html',
  styleUrls: ['./ants.component.scss']
})
export class AntsComponent implements OnInit {
  ants$: Observable<any>;

  constructor(
    private store: Store<fromItems.State>,
    // private ionSearchbar: IonSearchbar
  ) {

    this.ants$ = store.pipe(
      select(fromItems.selectAntsArrayState),
      map((r) => {
        return r.entities;
      }),
      map((r) => {
        return Object.values(r);
      }),
    );

    this.ants$
      .subscribe(arg => console.log('carga ', arg));

  }

  ngOnInit() {
    // llama a la accion loadItems, pasa por por reducer y guarda en entities e ids gracias a addMany
    // y con el effect loadItemsJSON$ lo rellena.
    this.store.dispatch(ItemsActions.loadItems());



  }

  search(query: string) {
    this.store.dispatch(SearchActions.searchItems({ query }));
  }

  openCard(id) {
    console.log('click Card', id);

  }

  findItems(query) {
    console.log(query);
    this.store.dispatch(FiltersActions.buscarItemsBuscador({ query }));
    // setTimeout(() => {
    //   const itemsMock: Ant[] = [];
    //   this.store.dispatch(SearchActions.searchSuccess({ items: itemsMock }));
    // }, 2000);
  }



}
