import {
  Component, OnInit, Input, ComponentFactory, ComponentRef, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, AfterViewInit, OnDestroy, OnChanges, SimpleChanges, DoCheck, ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';

import { PictureCarouselComponent } from '@shared/components/picture-carousel/picture-carousel.component';

// componentes dinámicos
import { AntsDescriptionComponent } from '@shared/components/ants/ants-description/ants-description.component';





@Component({
  selector: 'app-description-organism',
  templateUrl: './description-organism.component.html',
  styleUrls: ['./description-organism.component.scss'],
})
export class DescriptionOrganismComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges, DoCheck {

  miFactory: ComponentFactory<any>;
  componentRef: ComponentRef<AntsDescriptionComponent> = null; // se declara una variable referencia.
  @ViewChild('componenteDinamicoDescription', { read: ViewContainerRef }) compDynamicContainer: ViewContainerRef;
  @ViewChild(PictureCarouselComponent) pictureCarouselComponent: PictureCarouselComponent;
  @Input() data = {
    title: '',
    description: {},
    images: []
  };
  flagSend = 0; // si es 1 ha sido ya enviado y no se envía más.

  constructor(
    private resolver: ComponentFactoryResolver,
    public router: Router,
    public cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.getLazyComponent();
  }
  // TODO ngDoCheck ??? 
  ngOnChanges(changes: SimpleChanges): void {
    // debugger;
    // this.pictureCarouselComponent.images = this.data.images;
  }

  ngDoCheck(): void {
    //  debugger;
    // this.cdRef.detectChanges();
    if (this.data?.description && this.data?.images && this.data?.title?.length > 0) {
      this.sendData();
    }
  }

  sendData() {
    if (this.flagSend === 0) {
      this.flagSend = 1;
      const data = {
        images: this.data.images,
        folder: 'ants'
      }
      this.pictureCarouselComponent.data = data;
      this.pictureCarouselComponent.cd.detectChanges();
      this.componentRef.instance.data=this.data.description;
    }
  }




  async getLazyComponent() {
    this.compDynamicContainer.clear();
    // tslint:disable-next-line:no-shadowed-variable
    const { AntsDescriptionComponent } = await import('@shared/components/ants/ants-description/ants-description.component');
    this.componentRef = this.compDynamicContainer.createComponent(
      this.resolver.resolveComponentFactory(AntsDescriptionComponent)
    );
    this.componentRef.instance.data=this.data;
  }


  ngOnDestroy(): void {
    this.componentRef.destroy();
  }

}
