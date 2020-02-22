import { Component, OnInit } from '@angular/core';

// import { IonSearchbar } from '@ionic/angular';



import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { ItemsActions, SearchActions, FiltersActions } from '@ants/actions';
import * as fromItems from '@ants/reducers';
import { map, withLatestFrom, distinctUntilChanged } from 'rxjs/operators';
import { ItemsService } from '@ants/services/items.service';





@Component({
  selector: 'app-ants',
  templateUrl: './ants.component.html',
  styleUrls: ['./ants.component.scss']
})
export class AntsComponent implements OnInit {
  ants$: Observable<any>;

  constructor(
    private store$: Store<fromItems.State>,
    private itemsService: ItemsService
    // private ionSearchbar: IonSearchbar
  ) {
    this.store$.dispatch(ItemsActions.loadItems());

    // setTimeout(() => {
    //   this.findItems('');
    // }, 1000);

    this.ants$ = store$.pipe(
      select(fromItems.selectItemsSearch)
    );

    this.ants$.pipe(
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))
    )
      .subscribe(arg => {
        console.log('carga ', arg);
      });



  }

  ngOnInit() {
    // llama a la accion loadItems, pasa por por reducer y guarda en entities e ids gracias a addMany
    // y con el effect loadItemsJSON$ lo rellena.




    // of('hola').pipe(
    //   withLatestFrom(this.store$),
    //   map(([action, storeState]) => {
    //     debugger;
    //     // Do something ...
    //   })
    // ).subscribe((e) => {
    //   debugger;
    // });


    // setTimeout(() => {
    //   this.itemsService.getItems('camponotus').subscribe((e) => {
    //     debugger;
    //   });
    // }, 1000);




  }

  // search(query: string) {
  //   this.store.dispatch(SearchActions.searchItems({ query }));
  // }

  openCard(id) {
    console.log('click Card', id);

  }

  findItems(query: string) {
    console.log(query);
    this.store$.dispatch(SearchActions.searchItems({ query }));
    // setTimeout(() => {
    //   const itemsMock: Ant[] = [];
    //   this.store.dispatch(SearchActions.searchSuccess({ items: itemsMock }));
    // }, 2000);
  }



}
