import {
  Component, OnInit, Input, ComponentFactory, ComponentRef, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, AfterViewInit, OnDestroy
} from '@angular/core';

// componentes dinámicos
import { AntsItemComponent } from '@shared/components/ants/ants-item/ants-item.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() item: any;
  miFactory: ComponentFactory<any>;
  componentRef: ComponentRef<AntsItemComponent> = null; // se declara una variable referencia.
  @ViewChild('componenteDinamicoItem', { read: ViewContainerRef }) compDynamicContainer: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
      this.getLazyComponent();
  }


  async getLazyComponent() {
    this.compDynamicContainer.clear();
    // tslint:disable-next-line:no-shadowed-variable
    const { AntsItemComponent } = await import('@shared/components/ants/ants-item/ants-item.component');
    this.componentRef = this.compDynamicContainer.createComponent(
      this.resolver.resolveComponentFactory(AntsItemComponent)
    );
    // debugger;
    this.componentRef.instance.setItem(this.item);
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }

}
