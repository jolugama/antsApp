import { Component, OnInit, OnDestroy } from '@angular/core';


// rxjs y redux
import { Observable, combineLatest, of, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

// actions y reducers
import * as fromAntsReducers from '@pages/ants/reducers';
import * as fromAntsActions from '@pages/ants/actions';

// interfaces
import * as searcher from '@shared/components/searcher/interfaces';

// servicios
import { DataService } from '@shared/services/data.service';
import { AntsService } from '@pages/ants/services/ants.service';






@Component({
  selector: 'app-ants-items',
  templateUrl: './ants-item.page.html',
  styleUrls: ['./ants-item.page.scss'],
})
export class AntsItemPage implements OnInit, OnDestroy {

  itemsSuscription$: Subscription;
  constructor(
    // private dataService: DataService,
    private antService: AntsService,
    private storeItems$: Store<fromAntsReducers.State>,
  ) {
    console.log('constructor ant page');

    // cargo ants en redux
    this.antService.loadItems();

    this.antService.getItems().subscribe(data => {
      console.log(data);
      console.log('ants', data.ants.items);

    });



  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.itemsSuscription$.unsubscribe();
  }

}
