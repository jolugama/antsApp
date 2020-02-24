import { Component, OnInit } from '@angular/core';

// import { IonSearchbar } from '@ionic/angular';



import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { ItemsActions, SearchActions, FiltersActions } from '@ants/actions';
import * as fromItems from '@ants/reducers';
import { map, withLatestFrom, distinctUntilChanged } from 'rxjs/operators';
import { ItemsService } from '@ants/services/items.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-ants-list',
  templateUrl: './ants-list.component.html',
  styleUrls: ['./ants-list.component.scss']
})
export class AntsListComponent implements OnInit {
  ants$: Observable<any>;


  constructor(
    private store$: Store<fromItems.State>,
    private itemsService: ItemsService,
    public router: Router
    // private ionSearchbar: IonSearchbar
  ) {
    this.store$.dispatch(ItemsActions.loadItems());


    this.ants$ = store$.pipe(
      select(fromItems.selectItemsSearch)
    );

    this.ants$.pipe(
      distinctUntilChanged((a, b) => JSON.stringify(a.items) === JSON.stringify(b.items))
    ).subscribe(res => {
      console.log('carga ', res);
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
    this.router.navigate([`/ants/${id}`]);

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
