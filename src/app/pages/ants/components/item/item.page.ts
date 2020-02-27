import { Component, OnInit } from '@angular/core';
import { DataService } from '@shared/services/data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  constructor(
    private dataService: DataService
  ) {
    console.log('init page');
    this.dataService.loadItems().subscribe();
    // this.dataService.loadItems2();
  }

  ngOnInit() {

  }

}
