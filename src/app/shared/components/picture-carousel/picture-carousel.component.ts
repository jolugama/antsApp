import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-carousel',
  templateUrl: './picture-carousel.component.html',
  styleUrls: ['./picture-carousel.component.scss'],
})
export class PictureCarouselComponent implements OnInit {
  @Input() images: string[];
  constructor() { }

  ngOnInit() { }

}
