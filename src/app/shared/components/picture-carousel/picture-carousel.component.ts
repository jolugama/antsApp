import { Component, OnInit, Input, DoCheck, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { slideOpts } from './animations/slide';

interface Data {
  images: string[],
  folder: string;
}


@Component({
  selector: 'app-picture-carousel',
  templateUrl: './picture-carousel.component.html',
  styleUrls: ['./picture-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureCarouselComponent implements OnInit {


  @Input() data: Data;
  slideOpts = slideOpts;
  error = `./assets/img/noimage.png`;
  constructor(public cd: ChangeDetectorRef) { }

  ngOnInit() { }



  onError(event) {
    event.target.src = this.error;
  }

}
