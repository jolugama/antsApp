import { Component, OnInit, Input, ViewChild, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { MenuController } from '@ionic/angular';



// todo sobre ngrx redux
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LayoutActions } from '@redux/core/actions';
import * as fromRoot from '@redux/reducers';
import { AdDirective } from '@shared/directives/ad.directive';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ItemsListComponent implements OnInit, OnDestroy {
  @Input() ads: any;
  currentAdIndex = -1;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  constructor(
    private menu: MenuController,
    private store: Store<fromRoot.State>,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    // this.loadComponent();
   }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    // const componentRef = viewContainerRef.createComponent(componentFactory);
    // (<AdComponent>componentRef.instance).data = adItem.data;
  }


  openCloseSidenav(event) {
    if (event.type === 'ionDidOpen') {
      this.store.dispatch(LayoutActions.openSidenav());
    } else if (event.type === 'ionDidClose') {
      this.store.dispatch(LayoutActions.closeSidenav());
    }

  }

  ngOnDestroy() {

  }


}
