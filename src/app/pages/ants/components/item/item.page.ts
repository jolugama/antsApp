import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit, OnDestroy {

  items$: Subscription;
  constructor(
    private dataService: DataService,
  ) {
    console.log('init page');


    this.items$ = this.dataService.loadItems().subscribe(
      // nothing
    );
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.items$.unsubscribe();
  }

}
