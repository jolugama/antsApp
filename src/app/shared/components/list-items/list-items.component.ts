import {
  Component, OnInit, Input, ViewChild, OnDestroy, ComponentFactoryResolver, ViewContainerRef,
  ComponentRef, AfterViewInit
} from '@angular/core';
import { MenuController } from '@ionic/angular';



// todo sobre ngrx redux
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LayoutActions } from '@redux/core/actions';
import * as fromRoot from '@redux/reducers';

// componentes dinámicos
import { AntsListComponent } from '@ants/components/ants-list/ants-list.component';




@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ItemsListComponent implements OnInit, OnDestroy, AfterViewInit {

  public miReferencia: ComponentRef<AntsListComponent> = null; // se declara una variable referencia.

  @ViewChild('componenteDinamico', { read: ViewContainerRef }) compDynamicContainer: ViewContainerRef;
  constructor(
    private menu: MenuController,
    private store: Store<fromRoot.State>,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const miFactoria = this.resolver.resolveComponentFactory(AntsListComponent);
    const componentRef = this.compDynamicContainer.createComponent(miFactoria);
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
