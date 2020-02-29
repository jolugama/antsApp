import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss'],
})
export class ItemBoxComponent implements OnInit {
  @Input() items: any;

  constructor() { }

  ngOnInit() {
   }

}
