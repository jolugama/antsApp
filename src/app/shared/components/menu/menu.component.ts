import { Component, OnInit, Input } from '@angular/core';


// todo sobre ngrx redux
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LayoutActions } from '@redux/core/actions';
import * as fromRoot from '@redux/reducers';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() swipeGest: boolean
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'calendar'
    },
    {
      title: 'Hormigas',
      url: '/ants',
      icon: 'calendar'
    }
  ];

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() { }


  openCloseSidenav(event) {
    if (event.type === 'ionDidOpen') {
      this.store.dispatch(LayoutActions.openSidenav());
    } else if (event.type === 'ionDidClose') {
      this.store.dispatch(LayoutActions.closeSidenav());
    }
  }

  openTutorial() {
    console.log('click');
  }

}
