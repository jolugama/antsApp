import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromItemsReducer from '@modules/ants/reducers';
import * as fromItemsActions from '@modules/ants/actions';
import { Subscription } from 'rxjs/internal/Subscription';
import { map } from 'rxjs/operators';
import { Ant } from '@modules/ants/models';
import { Observable } from 'rxjs';
import { AntsService } from '@modules/ants/services/ants.service';


@Component({
  selector: 'app-ants-description-page',
  templateUrl: './ants-description-page.component.html',
  styleUrls: ['./ants-description-page.component.scss'],
})
export class AntsDescriptionPageComponent implements OnInit, OnDestroy {
  subs: Subscription;
  item$: Observable<Ant>;

  constructor(
    public router: Router,
    route: ActivatedRoute,
    private antService: AntsService,
    private storeItems$: Store<fromItemsReducer.State>,
  ) {

    this.subs = route.params
      .pipe(map(params => fromItemsActions.ItemsActions.selectItem({ id: Number(params.id) })))
      .subscribe(action => {
        storeItems$.dispatch(action);
        // debugger;
      });
  }

  ngOnInit() {
    this.item$ = this.storeItems$.pipe(select(fromItemsReducer.selectedItem)) as Observable<any>;
    this.item$.subscribe((data) => {
      // si carga la página desde descripción, no tiene cargado redux.
      // cargo items
      if(!data){
        this.antService.loadItems();
      }else{
        // si tiene cargado ants de redux -->
        console.log('xxxx',data);
 
      }

    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
