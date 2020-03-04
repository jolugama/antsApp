import { Component, OnInit, Input } from '@angular/core';

interface Data {
  images:string [],
  folder: string;
}


@Component({
  selector: 'app-picture-carousel',
  templateUrl: './picture-carousel.component.html',
  styleUrls: ['./picture-carousel.component.scss'],
})
export class PictureCarouselComponent implements OnInit {
  @Input() data: Data;
  
  constructor() { }

  ngOnInit() { }

}
