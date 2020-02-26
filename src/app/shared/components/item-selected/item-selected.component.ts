import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromItems from '@pages/ants/reducers';
import { ItemsActions } from '@pages/ants/actions';
import { Subscription } from 'rxjs/internal/Subscription';
import { map } from 'rxjs/operators';
import { Ant } from '@pages/ants/models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.scss'],
})
export class ItemSelectedComponent implements OnInit, OnDestroy {
  actionsSubscription: Subscription;
  item$: Observable<Ant>;

  constructor(
    public router: Router,
    public store: Store<fromItems.State>,
    route: ActivatedRoute
  ) {
    this.actionsSubscription = route.params
      .pipe(map(params => ItemsActions.selectItem({ id: Number(params.id) })))
      .subscribe(action => {
        store.dispatch(action);
      });


    // this.isSelectedBookInCollection$ = store.pipe(
    //   select(fromBooks.isSelectedBookInCollection)
    // );

  }

  ngOnInit() {
    this.item$ = this.store.pipe(select(fromItems.selectSelectedItem)) as Observable<Ant>;
    this.item$.subscribe((a) => {
      // debugger;
    });
  }

  back() {
    this.router.navigate([`/ants`]);
  }


  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }



}
