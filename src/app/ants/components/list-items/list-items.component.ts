import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



// todo sobre ngrx redux
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LayoutActions } from '@redux/core/actions';
import * as fromRoot from '@redux/reducers';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ItemsListComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {}


  openCloseSidenav(event) {
    if (event.type === 'ionDidOpen') {
      this.store.dispatch(LayoutActions.openSidenav());
    } else if (event.type === 'ionDidClose') {
      this.store.dispatch(LayoutActions.closeSidenav());
    }

  }

}
