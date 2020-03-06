import {
  Component, OnInit, Input, ComponentFactory, ComponentRef, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, AfterViewInit, OnDestroy, OnChanges, SimpleChanges, DoCheck, ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';


// componentes dinámicos
import { AntsFilterComponent } from '@shared/components/ants/ants-filter/ants-filter.component';



@Component({
  selector: 'app-filter-organism',
  templateUrl: './filter-organism.component.html',
  styleUrls: ['./filter-organism.component.scss'],
})
export class FilterOrganismComponent implements OnInit {
  miFactory: ComponentFactory<any>;
  componentRef: ComponentRef<AntsFilterComponent> = null; // se declara una variable referencia.
  @ViewChild('componenteDinamicoFilter', { read: ViewContainerRef }) compDynamicContainer: ViewContainerRef;
 
  // @Input() data = {
  //   title: '',
  //   description: {},
  //   images: []
  // };
  constructor(
    private resolver: ComponentFactoryResolver,
    public router: Router,
    public cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getLazyComponent();
  }


  async getLazyComponent() {
    this.compDynamicContainer.clear();
    // tslint:disable-next-line:no-shadowed-variable
    const { AntsFilterComponent } = await import('@shared/components/ants/ants-filter/ants-filter.component');
    this.componentRef = this.compDynamicContainer.createComponent(
      this.resolver.resolveComponentFactory(AntsFilterComponent)
    );
    // this.componentRef.instance.data=this.data;
  }

}
