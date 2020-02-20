import { Component, OnInit } from '@angular/core';

// import { IonSearchbar } from '@ionic/angular';



import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ItemsActions, SearchActions, FiltersActions } from '@ants/actions';
import * as fromAnts from '@ants/reducers';
// import { Ant } from '@ants/models';


@Component({
  selector: 'app-ants',
  templateUrl: './ants.component.html',
  styleUrls: ['./ants.component.scss']
})
export class AntsComponent implements OnInit {
  ants$: Observable<any>;

  constructor(
    private store: Store<fromAnts.State>,
    // private ionSearchbar: IonSearchbar
  ) {

    this.ants$ = store.pipe(select(fromAnts.selectAntsArrayState));

    this.ants$
      .subscribe(arg => console.log('carga ', arg));

  }

  ngOnInit() {
    this.store.dispatch(ItemsActions.loadItems());
    // setTimeout(() => {
    //   this.search('messor');
    // }, 1500);

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
