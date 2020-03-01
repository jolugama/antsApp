import { Component, OnInit } from '@angular/core';
import { Ant } from '@pages/ants/models/ant.ts';

@Component({
  selector: 'app-ants-item',
  templateUrl: './ants-item.component.html',
  styleUrls: ['./ants-item.component.scss'],
})
export class AntsItemComponent implements OnInit {
  item: Ant;
  constructor() {

  }

  ngOnInit() { }

  public setItem(item: Ant) {
    this.item = item;
  }

}
