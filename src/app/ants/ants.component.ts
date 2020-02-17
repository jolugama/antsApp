import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AntsActions } from '@ants/actions';
import { Ant } from '@ants/models';
import * as fromAnts from '@ants/reducers';

@Component({
  selector: 'app-ants',
  templateUrl: './ants.component.html',
  styleUrls: ['./ants.component.scss']
})
export class AntsComponent implements OnInit {
  ants$: Observable<Ant[]>;

  constructor(private store: Store<fromAnts.State>) {
    // this.books$ = store.pipe(select(fromAnts.selectBookCollection));
   }

  ngOnInit() {
    this.store.dispatch(AntsActions.loadAntsCollection());
  }

}
