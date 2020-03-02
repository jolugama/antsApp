/**
 * A través de @ViewChild('page')  accedo a las propiedades del genérico ItemPageComponent. 
 * Le proporciono título y los items a mostrar
 */


import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';


// rxjs y redux
import { Observable, combineLatest, of, Subscription, empty } from 'rxjs';
import { distinctUntilChanged, map, switchMap, take, catchError } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

// actions y reducers
import * as fromAntsReducers from '@modules/ants/reducers';
import * as fromAntsActions from '@modules/ants/actions';


// servicios
import { AntsService } from '@modules/ants/services/ants.service';


import { ItemPageComponent } from '@shared/components/organisms/item-page/item-page.component';






@Component({
  selector: 'app-ants-items-page',
  templateUrl: './ants-item-page.component.html',
  styleUrls: ['./ants-item-page.component.scss'],
})
export class AntsItemPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('page') page: ItemPageComponent;
  itemsSuscription$: Subscription;


  constructor(
    // private dataService: DataService,
    private antService: AntsService,
    private storeItems$: Store<fromAntsReducers.State>,
  ) {
    console.log('constructor ant page');

    // carga ants en redux
    this.antService.loadItems();
  }

  ngOnInit() {

  }


  ngAfterViewInit() {
    this.page.searcherEmitter.subscribe(data => {
      const query = data.value;
      this.storeItems$.dispatch(fromAntsActions.SearchActions.searchItems({ query }));
    });

    // suscripción a los items filtrados
    this.antService.getFilteredItems().subscribe(data => {
      console.log(data);
      console.log('ants', data.ants.items);
      this.page.dataItems = data.ants.items;
      if (this.page.innerWidth < 500) {
        this.page.data.title = 'AntsApp - Hormigas'
      }else{
        this.page.data.title = 'AntsApp - La enciclopedia de las hormigas'
      }
    
    });
  }

  ngOnDestroy(): void {
    this.itemsSuscription$.unsubscribe();
  }

}
