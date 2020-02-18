import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AntsActions, AntsSearchActions } from '@ants/actions';
import * as fromAnts from '@ants/reducers';

@Component({
  selector: 'app-ants',
  templateUrl: './ants.component.html',
  styleUrls: ['./ants.component.scss']
})
export class AntsComponent implements OnInit {
  ants$: Observable<any>;

  constructor(private store: Store<fromAnts.State>) {
    this.ants$ = store.pipe(select(fromAnts.selectAntsArrayState));

    this.ants$
      .subscribe(arg => console.log('carga ', arg));

  }

  ngOnInit() {
    this.store.dispatch(AntsActions.loadAntsCollection());
    // setTimeout(() => {
    //   this.search('messor');
    // }, 1500);

  }

  search(query: string) {
    this.store.dispatch(AntsSearchActions.searchAnts({ query }));
  }

}
