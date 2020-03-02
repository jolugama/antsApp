import {
  Component, OnInit, Input, ComponentFactory, ComponentRef, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, AfterViewInit, OnDestroy
} from '@angular/core';

// componentes dinámicos
import { AntsDescriptionComponent } from '@shared/components/ants/ants-description/ants-description.component';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.scss'],
})
export class DescriptionPageComponent implements OnInit, AfterViewInit, OnDestroy {
  miFactory: ComponentFactory<any>;
  componentRef: ComponentRef<AntsDescriptionComponent> = null; // se declara una variable referencia.
  @ViewChild('componenteDinamicoDescription', { read: ViewContainerRef }) compDynamicContainer: ViewContainerRef;
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
    const { AntsDescriptionComponent } = await import('@shared/components/ants/ants-description/ants-description.component');
    this.componentRef = this.compDynamicContainer.createComponent(
      this.resolver.resolveComponentFactory(AntsDescriptionComponent)
    );
  }


  ngOnDestroy(): void {
    this.componentRef.destroy();
  }

}
