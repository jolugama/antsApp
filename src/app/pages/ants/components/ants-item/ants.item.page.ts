import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { take } from 'rxjs/operators';


import { Store, select } from '@ngrx/store';


import * as searcher from '@shared/components/searcher/interfaces';


import { Observable, combineLatest, of, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import * as fromAntsReducers from '@pages/ants/reducers';
import * as fromAntsActions from '@pages/ants/actions';


@Component({
  selector: 'app-ants-items',
  templateUrl: './ants-item.page.html',
  styleUrls: ['./ants-item.page.scss'],
})
export class AntsItemPage implements OnInit, OnDestroy {

  items$: Subscription;
  constructor(
    private dataService: DataService,
    private storeItems$: Store<fromAntsReducers.State>,
  ) {
    console.log('init page');

    // cargo ants en redux
    this.items$ = this.dataService.loadItems().subscribe(
      // nothing
    );
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.items$.unsubscribe();
  }

}
