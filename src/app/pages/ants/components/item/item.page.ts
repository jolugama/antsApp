import { Component, OnInit } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  items$: Subscription;
  constructor(
    private dataService: DataService
  ) {
    console.log('init page');

    this.items$ = this.dataService.loadItems('ants').subscribe(
    );
  }

  ngOnInit() {

  }

}
