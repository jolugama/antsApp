/**
 * Es el encargado de vertificar en el redux router en qué ruta estamos
 *
 */

import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';

// import { Store, select } from '@ngrx/store';

// import { DataService } from '@shared/services/data.service';
import * as searcher from '@shared/components/searcher/interfaces';
import { Subject } from 'rxjs';




@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit, OnDestroy {

  // searcher: searcher.Out;

  public searcherEmitter = new EventEmitter<searcher.Out>();
  public dataItems: any;
  // items$: Observable<any>; // donde se almacena los items a mostrar (los filtrados)

  constructor(


  ) {

    // // almaceno todos los items
    // this.items$ = storeItems$.pipe(
    //   select(fromAntsReducers.selectItemsSearch)
    // );

    // this.items$ = storeItems$.pipe(
    //   switchMap(data => {
    //     return  select(fromAntsReducers.selectItemsSearch);
    //   })
    // );

    // this.dataService.getSetCurrentKey().pipe(
    //   // map(key => {
    //   //   return distinctUntilChanged((a, b) => JSON.stringify(a[key].items) === JSON.stringify(b[key].items));
    //   // })
    //   switchMap(key => {

    //   })
    // ).subscribe(res => {
    //   console.log('carga ', res);
    //   this.dataService.emitItems();
    // });

  }

  ngOnInit() {

  }

  // recibe del componente buscador y guarda el objeto en searcher.
  onSearch(data: searcher.Out) {
    this.searcherEmitter.emit(data);
    // this.findItems(this.searcher.value);
  }

  // findItems(query: string) {
  //   this.findEmiter = new EventEmitter<Out>();
  //   // this.storeItems$.dispatch(fromAntsActions.SearchActions.searchItems({ query }));
  // }

  openFilter() {
    console.log('openFilter');

  }

  ngOnDestroy(): void {
    alert('delete');
    throw new Error('se destruye item-page');
  }

}
