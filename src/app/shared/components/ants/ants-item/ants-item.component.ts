import { Component, OnInit } from '@angular/core';
import { Ant } from '@pages/ants/models/ant.ts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ants-item',
  templateUrl: './ants-item.component.html',
  styleUrls: ['./ants-item.component.scss'],
})
export class AntsItemComponent implements OnInit {
  item: Ant;
  constructor(
    public router: Router
  ) {

  }

  ngOnInit() { }

  public setItem(item: Ant) {
    this.item = item;
  }

  openCard(id) {
    console.log('click id', id);
    this.router.navigate([`/ants/${id}`])
  }

}
