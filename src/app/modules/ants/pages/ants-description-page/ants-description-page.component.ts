/**
 * A través de @ViewChild('page')  accedo a las propiedades del genérico description-organism. 
 * Le proporciono título y los items a mostrar
 */


import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromItemsReducer from '@modules/ants/reducers';
import * as fromItemsActions from '@modules/ants/actions';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, take } from 'rxjs/operators';
import { Ant } from '@modules/ants/models';
import { Observable } from 'rxjs';
import { AntsService } from '@modules/ants/services/ants.service';

import { DescriptionOrganismComponent } from '@shared/components/organisms/description-organism/description-organism.component';



@Component({
  selector: 'app-ants-description-page',
  templateUrl: './ants-description-page.component.html',
  styleUrls: ['./ants-description-page.component.scss'],
})
export class AntsDescriptionPageComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('page') page: DescriptionOrganismComponent;

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

  }

  ngAfterViewInit(): void {
    this._sendData();


  }


  private _sendData() {

    this.item$ = this.storeItems$.pipe(
      select(fromItemsReducer.selectedItem),
      take(1)
    );
    this.item$.subscribe((data) => {

      // si carga la página desde descripción, no tiene cargado redux.
      // cargo items
      if (!data) {
        this.antService.loadItems();
        this.antService.getFilteredItems().subscribe(data => {
          if (data?.ants?.items?.length > 0) {
            this._sendData();
          }

        })
      } else {
        // debugger;
        // si tiene cargado ants de redux -->
        console.log('xxxx', data);
        const { images, ...rest } = data;
        let title = `${rest.taxonomy.specie}`;
        if (this.antService.getWidth() > 500) {
          title = `${rest.taxonomy.specie} - ${rest.taxonomy.subfamily}`
        }
        const dataObj= {
          title: title,
          description: rest,
          images: images,
        };

        this.page.data = dataObj;
        // this.page.setData(dataObj);
        // this.page.cdRef.detectChanges();
        
      }

    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
